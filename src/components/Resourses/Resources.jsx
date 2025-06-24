import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../SideBar/Sidebar";
import "./Resources.css";
import NavUser from "../UserNavbar/NavUser";

export default function Resources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [expandedArticleId, setExpandedArticleId] = useState(null);

  useEffect(() => {
      const token = localStorage.getItem("token");
     console.log("Sending token:", token);
    const fetchResources = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/resource/getAllResources",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setResources(response.data?.data?.resources || []);
      } catch (error) {
        console.error("Error fetching resources:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  // ❗ تجميع الموارد حسب النوع والفئة
  const groupedResources = {};
  resources.forEach((item) => {
    const type = item.resource_type;
    const category = item.category;

    if (!groupedResources[type]) {
      groupedResources[type] = new Set();
    }
    groupedResources[type].add(category);
  });

  const filteredArticles = resources.filter(
    (item) =>
      item.resource_type === selectedType &&
      item.category === selectedCategory
  );

  const articlesToDisplay = showAll
    ? filteredArticles
    : filteredArticles.slice(0, 3);

  // ✅ عند الضغط على المقال، خزّنه في localStorage
  const handleArticleClick = (article) => {
    let viewedArticles =
      JSON.parse(localStorage.getItem("recentArticles")) || [];

    // احذف المقال لو كان موجود بالفعل
    viewedArticles = viewedArticles.filter(
      (a) => a.resource_id !== article.resource_id
    );

    // أضف المقال في البداية
    viewedArticles.unshift(article);

    // احتفظ فقط بآخر 3
    if (viewedArticles.length > 3) {
      viewedArticles = viewedArticles.slice(0, 3);
    }

    localStorage.setItem("recentArticles", JSON.stringify(viewedArticles));

    // Toggle expand
    setExpandedArticleId(
      expandedArticleId === article.resource_id ? null : article.resource_id
    );
  };

  return (
    <div className="resources-bg">
      <NavUser />
      <Sidebar />
      <div className="container"  style={{ padding: "60px" }}>
        <div className="row">
          <div className="resource-main col-lg-12 col-md-6 ">
            <h3 className="mb-3">Resources</h3>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="resource-type py-3 d-flex flex-row justify-content-between">
                  <h5>
                    {selectedCategory ? selectedType : "Resources Type"}
                  </h5>

                  {selectedCategory && filteredArticles.length > 3 && !showAll ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => setShowAll(true)}
                    >
                      See All
                    </button>
                  ) : selectedCategory ? (
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => {
                        setSelectedCategory(null);
                        setSelectedType(null);
                        setShowAll(false);
                        setExpandedArticleId(null);
                      }}
                    >
                      Back
                    </button>
                  ) : (
                    <span></span>
                  )}
                </div>

                {/* ✅ عرض المقالات */}
                {selectedCategory && selectedType ? (
                  <div className="resource-cards col d-flex flex-column gap-3 ">
                    {articlesToDisplay.map((article) => (
                      <div
                        key={article.resource_id}
                        className="card border-5 rounded-3 px-3 py-4"
                        style={{ cursor: "pointer" }}
                        onClick={() => handleArticleClick(article)}
                      >
                        <div className="card-title text-center fw-bold">
                          {article.title}
                        </div>
                        {expandedArticleId === article.resource_id && (
                          <div className="card-body mt-3">
                            <p
                              className="text-secondary"
                              style={{ whiteSpace: "pre-line" }}
                            >
                              {article.content}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  Object.keys(groupedResources).map((type) => (
                    <div key={type} className="mb-4">
                      <div className="resource-cards col d-flex flex-row justify-content-evenly gap-3 flex-wrap">
                        {[...groupedResources[type]].map((category) => (
                          <div
                            key={category}
                            onClick={() => {
                              setSelectedCategory(category);
                              setSelectedType(type);
                              setShowAll(false);
                            }}
                            className="card border-5 rounded-3 w-25 py-5"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="card-title text-center">
                              {category}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

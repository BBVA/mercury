---
hide:
  - navigation  
---

# Mercury: the BBVA Python Library for Machine Learning and Data Science

We contribute to the open-source community with Mercury, the [BBVA](https://www.bbva.es/en/) Python library for Machine Learning and Data Science. Discover this comprehensive suite of tools designed to streamline the creation of AI models.

<div style="height: 1px;"></div>

![Accelerate ML workflows](assets/index_1.png){ align=left width="120" }

### Accelerate ML workflows

Mercury offers a range of tools and utilities that simplify and accelerate the creation of Machine Learning models, allowing experts to focus on the key aspects of their work.

<div style="height: 1px;"></div>

![Use it and contribute](assets/index_2.png){ align=left width="120" }

### Use it and contribute!

This library was originally an Inner Source project at BBVA, but now some assets are open-source! We welcome everyone to use and contribute to the library: together, we can improve it and make it more useful.

<div style="height: 1px;"></div>

![Powered by ML experts](assets/index_3.png){ align=left width="120" }

### Powered by ML experts

We work to ensure that Mercury continues to grow and release new assets. The Mercury core team maintains the library updated and proactively develops new functionalities.

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Mercury’s Micro-Repositories

Mercury is structured with multiple micro-repositories in a highly modular design. These packages are available on Github, where you will also find installation instructions, documentation, and examples of how to use the library. Each repository is independent, but some have interdependencies. For example, mercury-robust uses mercury-dataschema and mercury-monitoring underneath.

<div style="height: 1px;"></div>

<div class="grid cards" markdown>

-   :fontawesome-brands-github:{ .lg .middle } __mercury-dataschema__

    ---

    Utility package that **automatically infers feature types and calculates different statistics** based on those types, given a Pandas DataFrame. It is very useful for validating whether different datasets match the same schema, or for using their statistics to calculate drift.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-dataschema)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-dataschema/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-explainability__

    ---

    Offers a collection of **methods and techniques to interpret and inspect ML models**. This package focuses on providing explanations for classification and regression models, both locally and globally, to gain a better understanding of how an ML model works and the factors that contribute to its predictions.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-explainability)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-explainability/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-monitoring__

    ---

    Package dedicated to model monitoring. It’s crucial to **continuously monitor the performance of ML models in production**. This involves detecting changes in the incoming data distribution or data drift and estimating the model accuracy at inference time.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-monitoring)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-monitoring/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-reels__

    ---

    A library to **analyze sequences of events extracted from transactional data**. These events can be automatically discovered or manually defined.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-reels)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-reels/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-robust__

    ---

    A lightweight framework for performing **robust testing on ML models and datasets**. It ensures that data workflows and models are robust against certain conditions, such as data drift, label leaking, or input data schema issues, by raising an exception when they fail.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-robust)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-robust/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-settrie__

    ---

    A Python library for **creating, updating, and querying SetTrie objects efficiently**. To ensure high performance, it uses an underlying **C++ implementation**, which optimizes subset and superset search operations.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-settrie)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-settrie/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-graph__

    ---

    This library offers **graph analytics capabilities with a technology-agnostic API**, enabling users to apply a curated range of performant and scalable algorithms and utilities regardless of the underlying data framework.

    [:octicons-mark-github-24: GitHub repository](https://github.com/BBVA/mercury-graph)

    [:octicons-arrow-right-24: Documentation](https://bbva.github.io/mercury-graph/site/)

</div>

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Mercury's strengths

Each Mercury component brings something new or offers clear advantages over other available analytical solutions. The modules are functional and production-ready, and they are designed as pieces of code that are not tied to specific business cases, so anyone can use them.

<div style="height: 1px;"></div>

![From small utilities to complete frameworks](assets/index_4.png){ align=left width="120" }

### From small utilities to complete frameworks

Some packages are designed to solve specific Data Science tasks, while others offer a diverse collection of Machine Learning functionalities through a unified API.

<div style="height: 1px;"></div>

![High-quality components](assets/index_5.png){ align=left width="120" }

### High-quality components

Every function or class in Mercury has been thoroughly tested and documented by a dedicated core team from BBVA. The library is production-ready, meaning that it has been designed for deploying ML models in real-world environments. Additionally, tutorials are provided to facilitate the adoption of the library.

<div style="height: 1px;"></div>

![Domain-specific](assets/index_6.png){ align=left width="120" }

### Domain-specific

In Mercury, you may find a representative sample of relevant ML domains for financial services such as explainability, monitoring, or sequence modeling.

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Our journey to Open-Source

The Mercury Python library was born as an Inner-Source project within BBVA. At the time, our primary objective was to streamline the use of code components among the bank’s technology teams, dispersed across different departments and countries. This initiative not only improved code quality –as more people could review, comment and document it–, but also strengthened a culture of community and knowledge sharing.

Now, going open-source, Mercury invites global software developers to use its components, share feedback, and contribute to its growth. We believe that making some of the work we do available to everyone makes us more transparent and demonstrates how we approach working with data. Mercury is our way of contributing back to the open-source community that has been pivotal in our success.

<figure markdown="span">
  ![Mercury logo](assets/mercury.png){ width="500" }
</figure>

!!! tip "Collaborate with Mercury"
    If you want to discuss specific functionality within the scope of Mercury, please open an issue on GitHub. This approach enables focused, organized and visible discussions that may be useful for someone else. You can also contact us at [mercury.team@bbva.com](mailto:mercury.team@bbva.com).

    [BBVA's GitHub](https://github.com/BBVA){ .md-button }

<br>
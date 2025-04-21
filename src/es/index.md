---
hide:
  - navigation  
---

# Mercury: la librería de Python de BBVA para *Machine Learning* y *Data Science*

Contribuimos a la comunidad open-source con Mercury, la librería de Python de [BBVA](https://www.bbva.es/) para machine learning y ciencia de datos. Descubre este completo conjunto de herramientas diseñadas para acelerar la creación de modelos de IA.

<div style="height: 1px;"></div>

![Acelera los flujos de trabajo de ML](assets/index_1.png){ align=left width="120" }

### Acelera los flujos de trabajo de ML

Mercury ofrece una variedad de herramientas y utilidades que simplifican y aceleran la creación de modelos de machine learning, permitiendo a los expertos centrarse en los aspectos clave de su trabajo.

<div style="height: 1px;"></div>

![Utiliza Mercury y contribuye](assets/index_2.png){ align=left width="120" }

### ¡Utiliza Mercury y contribuye!

Esta librería fue originalmente un proyecto “inner source” en BBVA, ¡pero ahora algunos módulos son open-source! Invitamos a todos a usarla y contribuir: juntos, podemos mejorarla y hacerla más útil.

<div style="height: 1px;"></div>

![Impulsado por expertos en ML](assets/index_3.png){ align=left width="120" }

### Impulsado por expertos en ML

Trabajamos para asegurar que Mercury siga creciendo y lanzando nuevos módulos. El equipo dedicado de Mercury mantiene la librería actualizada y desarrolla proactivamente nuevas funcionalidades.

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Micro repositorios de Mercury

Mercury se organiza en múltiples micro repositorios, con un diseño modular. Estos paquetes están disponibles en Github, donde también encontrarás instrucciones de instalación, documentación y ejemplos de uso de la librería. Cada repositorio es independiente, pero algunos tienen interdependencias. Por ejemplo, mercury-robust utiliza mercury-dataschema y mercury-monitoring por debajo.

<div style="height: 1px;"></div>

<div class="grid cards" markdown>

-   :fontawesome-brands-github:{ .lg .middle } __mercury-dataschema__

    ---

    Paquete de utilidades que **infiere automáticamente tipos de features y calcula diferentes estadísticas** basadas en esos tipos, dado un DataFrame de Pandas. Es muy útil para validar si diferentes conjuntos de datos coinciden con el mismo esquema, o para utilizar sus estadísticas para calcular la desviación del modelo (drift).

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-dataschema/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-explainability__

    ---

    Ofrece una colección de **métodos y técnicas para interpretar e inspeccionar modelos de ML**. Este paquete se centra en ofrecer explicaciones de los modelos de clasificación y regresión, tanto a nivel local como global, para comprender mejor cómo funciona un modelo y los factores que influyen en sus predicciones.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-explainability/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-monitoring__

    ---

    PPaquete dedicado a la monitorización de modelos. Es crucial **supervisar continuamente el rendimiento de los modelos de ML en producción**. Esto implica detectar cambios en la distribución de los datos entrantes o la desviación de los datos (data drift), y estimar la precisión del modelo en el momento de inferencia.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-monitoring/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-reels__

    ---

    Una librería para **analizar secuencias de eventos extraídos de datos transaccionales**. Estos eventos pueden descubrirse automáticamente o definirse manualmente.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-reels/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-robust__

    ---

    Un framework ligero para realizar **pruebas de solidez en modelos de ML y conjuntos de datos**. Garantiza que los flujos de trabajo de datos y los modelos sean robustos frente a determinadas condiciones, como la desviación de datos (data drift), las fugas de etiquetas o los problemas de esquema de datos de entrada, lanzando una excepción cuando fallan.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-robust/site/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-settrie__

    ---

    Una librería de Python que permite **crear, actualizar y consultar objetos SetTrie de forma eficiente**. Para garantizar un alto rendimiento, utiliza una **implementación subyacente en C++**, lo que optimiza las operaciones de búsqueda de subsets y supersets.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-settrie/)

-   :fontawesome-brands-github:{ .lg .middle } __mercury-graph__

    ---

    Esta librería ofrece funciones de **análisis de grafos con una API agnóstica a la tecnología**, lo que permite a los usuarios aplicar una amplia gama de algoritmos y utilidades escalables y de alto rendimiento con independencia del framework de datos subyacente.

    [:octicons-arrow-right-24: Documentación](https://bbva.github.io/mercury-graph/site/)

</div>

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Cualidades de Mercury

En Mercury, cada componente aporta algo nuevo o ofrece ventajas claras frente a otras soluciones analíticas disponibles. Los módulos son funcionales y están listos para ser puestos en producción. Además, están diseñados como piezas de código desvinculadas de casos de negocio específicos, por lo que cualquier usuario puede utilizarlos.

<div style="height: 1px;"></div>

![Desde pequeñas utilidades a frameworks completos](assets/index_4.png){ align=left width="120" }

### Desde pequeñas utilidades a frameworks completos

Algunos paquetes están diseñados para resolver tareas específicas de ciencia de datos, mientras que otros ofrecen una colección diversa de funcionalidades de ML a través de una API unificada.

<div style="height: 1px;"></div>

![Componentes de alta calidad](assets/index_5.png){ align=left width="120" }

### Componentes de alta calidad

Cada función o clase de Mercury ha sido minuciosamente probada y documentada por un equipo dedicado de BBVA. La librería está lista para poner en producción, lo que significa que ha sido diseñada para desplegar modelos ML en entornos reales. Además, se proporcionan tutoriales para facilitar la adopción de la librería.

<div style="height: 1px;"></div>

![Especializado](assets/index_6.png){ align=left width="120" }

### Especializado

En Mercury puedes encontrar una muestra representativa de aspectos de ML relevantes en el sector financiero, como la explicabilidad, la monitorización o el modelado de secuencias.

<div style="height: 15px;"></div>

<hr>

<div style="height: 15px;"></div>

# Nuestro camino hacia el código abierto

La librería de python Mercury nació como un proyecto de ‘inner-source’ dentro de BBVA. En ese momento, nuestro principal objetivo era facilitar la reutilización de componentes de código entre los equipos de tecnología del banco, dispersos entre diferentes departamentos y países. Esta iniciativa no sólo ayudó a mejorar la calidad del código -ya que más compañeros podían revisarlo, comentarlo y documentarlo-, sino que también afianzó una cultura de comunidad y de intercambio de conocimientos.

Ahora en código abierto, Mercury invita a los desarrolladores de software de todo el mundo a utilizar sus componentes, compartir su feedback y contribuir a su crecimiento. Creemos que poner a disposición de todos parte del trabajo que realizamos nos hace más transparentes y demuestra cómo abordamos el trabajo con datos. Mercury es nuestra forma de contribuir de vuelta a la comunidad open-source, que ha sido fundamental para nuestro éxito.

<figure markdown="span">
  ![Mercury logo](assets/mercury.png){ width="500" }
</figure>

!!! tip "Colabora con Mercury"
    Si quieres debatir sobre una funcionalidad específica dentro del ámbito de Mercury, abre una incidencia en GitHub. De esta manera podremos mantener debates bien organizados y visibles que pueden ser útiles para otras personas. También puedes ponerte en contacto con nosotros en [mercury.team@bbva.com](mailto:mercury.team@bbva.com).

    [GitHub de BBVA](https://github.com/BBVA){ .md-button }

<br>
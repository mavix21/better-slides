export const translations = {
  scanMe: { es: "Escaneame", en: "Scan me" },
  nav: { es: "← → para navegar", en: "← → to navigate" },

  // Slide 0: Opening
  opening: {
    title: { es: "Context Engineering", en: "Context Engineering" },
    subtitle: {
      es: "Diseñar y controlar todo lo que un LLM ve antes de generar un solo token",
      en: "Designing and controlling everything an LLM sees before it generates a single token",
    },
  },

  // Slide 1: What is an Agent?
  whatIsAgent: {
    title: { es: "¿Qué es un Agente?", en: "What is an Agent?" },
    desc: {
      es: "Un LLM que puede tomar acciones en un loop hasta completar una tarea.",
      en: "An LLM that can take actions in a loop until a task is complete.",
    },
    item1: {
      es: "LLM - Un modelo de lenguaje que puede razonar y tomar decisiones",
      en: "LLM - A language model that can reason and make decisions",
    },
    item2: {
      es: "Acciones - Capacidad de hacer cosas (call tools, escribir archivos, llamadas a API)",
      en: "Actions - The ability to do things (call tools, write files, make API calls)",
    },
    item3: {
      es: "Loop - Sigue trabajando hasta terminar, no solo da una respuesta",
      en: "Loop - Keeps going until the job is done, not just one response",
    },
    closingQuote: {
      es: '"Un chatbot responde una vez. Un agente sigue trabajando."',
      en: '"A chatbot responds once. An agent keeps working."',
    },
    llm: { es: "LLM", en: "LLM" },
    action: { es: "Acción / Tool", en: "Action / Tool" },
    result: { es: "Resultado", en: "Result" },
    repeat: { es: "Repetir", en: "Repeat" },
  },

  // Slide 2: The Agent Loop
  agentLoop: {
    title: { es: "El Loop del Agente", en: "The Agent Loop" },
    observe: { es: "Observar", en: "Observe" },
    observeDesc: {
      es: "Contexto actual + tools",
      en: "Current context + tools",
    },
    plan: { es: "Planificar", en: "Plan" },
    planDesc: {
      es: "Razonar sobre el próximo paso",
      en: "Reason about next step",
    },
    act: { es: "Actuar", en: "Act" },
    actDesc: {
      es: "Tool call / edición de código / búsqueda",
      en: "Tool call / code edit / search",
    },
    observeResult: { es: "Observar resultado", en: "Observe result" },
    observeResultDesc: {
      es: "Nuevos datos agregados al contexto",
      en: "New data added to context",
    },
    repeatUntil: {
      es: "Repetir hasta completar la tarea",
      en: "Repeat until task complete",
    },
  },

  // Slide 3: Why Agents Fail
  whyFail: {
    title: { es: "¿Por qué fallan los Agentes?", en: "Why Do Agents Fail?" },
    reason1: {
      es: "Contexto incorrecto o faltante (más común)",
      en: "Wrong or missing context (most common)",
    },
    reason2: {
      es: "Degradación del contexto (el historial se infla, la atención se diluye)",
      en: "Context rot (history bloats, attention fades)",
    },
    reason3: {
      es: "Escasez de atención (el LLM no puede enfocarse en todo)",
      en: "Attention scarcity (LLM can't focus on everything)",
    },
    reason4: {
      es: "Diseño pobre de herramientas o sobrecarga",
      en: "Poor tool design or overload",
    },
    result: {
      es: "Resultado: Alucinaciones, acciones incorrectas, loops infinitos",
      en: "Result: Hallucinations, wrong actions, endless loops",
    },
  },

  // Slide 4: Prompt → Context Engineering
  promptToCE: {
    title: {
      es: "Prompt Engineering está Muerto",
      en: "Prompt Engineering is Dead",
    },
    subtitle: {
      es: "Larga vida al Context Engineering",
      en: "Long live Context Engineering",
    },
    quote: {
      es: '"Context engineering es el delicado arte y ciencia de llenar la ventana de contexto con exactamente la información correcta para el siguiente paso."',
      en: '"Context engineering is the delicate art and science of filling the context window with just the right information for the next step."',
    },
    author: { es: "Andrej Karpathy", en: "Andrej Karpathy" },
    prompts: { es: "Prompts = palabras", en: "Prompts = words" },
    ce: {
      es: "Context Engineering = todo el entorno de información",
      en: "Context Engineering = entire information environment",
    },
  },

  // Slide 5: What is Context Engineering?
  whatIsCE: {
    title: {
      es: "¿Qué es Context Engineering?",
      en: "What is Context Engineering?",
    },
    definition: {
      es: "Curar y mantener el conjunto óptimo de tokens para que el LLM reciba la información correcta en el formato correcto en el momento correcto.",
      en: "Curating & maintaining the optimal set of tokens so the LLM gets the right information in the right format at the right time.",
    },
    anthropic: {
      es: "Definición de Anthropic: La progresión natural más allá del prompt engineering.",
      en: "Anthropic definition: The natural progression beyond prompt engineering.",
    },
    rightInfo: { es: "Información correcta", en: "Right information" },
    rightFormat: { es: "Formato correcto", en: "Right format" },
    rightTime: { es: "Momento correcto", en: "Right time" },
  },

  // Slide 6: Core Techniques
  techniques: {
    title: { es: "Técnicas Fundamentales", en: "Core Techniques" },
    jit: { es: "Recuperación Just-in-time", en: "Just-in-time Retrieval" },
    jitDesc: { es: "Cargar solo lo necesario", en: "Load only what's needed" },
    compaction: { es: "Compactación", en: "Compaction" },
    compactionDesc: {
      es: "Resumir historial (mantener la señal)",
      en: "Summarize history (keep signal)",
    },
    memory: { es: "Memoria Agéntica", en: "Agentic Memory" },
    memoryDesc: {
      es: "Notas persistentes fuera de la ventana",
      en: "Persistent notes outside window",
    },
    subAgents: { es: "Sub-agentes", en: "Sub-agents" },
    subAgentsDesc: {
      es: "Contextos aislados y especializados",
      en: "Specialized isolated contexts",
    },
    tools: {
      es: "Curación de Herramientas y Skills",
      en: "Tool & Skill Curation",
    },
    toolsDesc: {
      es: "Mínimo, claro, relevante",
      en: "Minimal, clear, relevant",
    },
  },

  // Slide 7: The Agent Harness (intro)
  agentHarness: {
    title: {
      es: "El Agent Harness",
      en: "The Agent Harness",
    },
    subtitle: {
      es: "Un conjunto estructurado de controles que define qué sabe el agente, qué puede hacer, y cómo se valida su trabajo. Hay cuatro palancas clave que necesitas dominar.",
      en: "A structured set of controls that shape what the agent knows, what it can do, and how its work gets validated. There are four key levers you need to master.",
    },
    lever1: { es: "Custom Rules", en: "Custom Rules" },
    lever2: { es: "MCP Servers", en: "MCP Servers" },
    lever3: { es: "Skills", en: "Skills" },
    lever4: { es: "Spec Driven Development", en: "Spec Driven Development" },
  },

  // Slide 8: Custom Rules
  customRules: {
    title: { es: "Custom Rules", en: "Custom Rules" },
    subtitle: {
      es: "La palanca más accesible y donde la mayoría de equipos deberían empezar. Archivos que se inyectan automáticamente en el contexto del agente al inicio de cada interacción.",
      en: "The most accessible lever and where most teams should start. Files that get automatically injected into the agent's context at the start of every interaction.",
    },
    doTitle: { es: "Qué incluir", en: "What to include" },
    do1: {
      es: "Tu stack técnico y patrones de arquitectura",
      en: "Your project's tech stack and architecture patterns",
    },
    do2: {
      es: "Convenciones de naming y preferencias de estilo de código",
      en: "Naming conventions and code style preferences",
    },
    do3: {
      es: "Filosofía de testing y pitfalls comunes del codebase",
      en: "Testing philosophy and common codebase pitfalls",
    },
    do4: {
      es: "Anti-patrones que has visto producir al agente",
      en: "Anti-patterns you've seen the agent produce",
    },
    dontTitle: { es: "Qué NO incluir", en: "What NOT to include" },
    dont1: {
      es: "Documentación completa de APIs (demasiado largo, desperdicia contexto)",
      en: "Entire API documentation (too long, wastes context)",
    },
    dont2: {
      es: 'Instrucciones obvias ("escribe código limpio")',
      en: 'Obvious instructions ("write clean code")',
    },
    dont3: {
      es: "Reglas contradictorias",
      en: "Contradictory rules",
    },
    tipsTitle: { es: "Tips", en: "Tips" },
    tip1: {
      es: "Máximo 500 líneas, instrucciones precisas",
      en: "Keep under 500 lines, be precise",
    },
    tip2: {
      es: "Modulares: dividir por concern",
      en: "Modular: split by concern",
    },
    tip3: {
      es: "Usar few-shot examples",
      en: "Use few-shot examples",
    },
    tip4: {
      es: "Carga condicional, no todo always-on",
      en: "Conditional loading, not everything always-on",
    },
  },

  // Slide 9: MCP Servers
  mcpServers: {
    title: { es: "MCP Servers", en: "MCP Servers" },
    subtitle: {
      es: "Plugins que extienden las capacidades del agente más allá de leer y escribir archivos. Conectan al agente con el conocimiento de tu organización.",
      en: "Plugins that extend the agent's capabilities beyond reading and writing files. They bridge the gap between the agent and your organization's knowledge.",
    },
    cap1: {
      es: "Consultar tu base de datos para entender esquema y datos",
      en: "Query your database to understand schema and data",
    },
    cap2: {
      es: "Buscar en documentación interna o wiki",
      en: "Search your internal documentation or wiki",
    },
    cap3: {
      es: "Consultar contratos de APIs internas",
      en: "Look up internal API contracts",
    },
    cap4: {
      es: "Interactuar con tu pipeline de CI/CD",
      en: "Interact with your CI/CD pipeline",
    },
    cap5: {
      es: "Acceder a specs de diseño en Figma",
      en: "Access design specs from Figma",
    },
    cap6: {
      es: "Testear la implementación real",
      en: "Test the actual implementation",
    },
    insight: {
      es: "Sin MCPs, el agente está limitado a lo que hay en el repo. Con ellos, accede a los mismos recursos que un dev humano.",
      en: "Without MCPs, the agent is limited to what's in the repo. With them, it can access the same resources a human developer would.",
    },
  },

  // Slide 10: Skills
  skills: {
    title: { es: "Skills", en: "Skills" },
    subtitle: {
      es: "La palanca más poderosa del harness. Combinan inyección de contexto con lógica ejecutable. Se cargan on-demand para no consumir tu presupuesto de contexto.",
      en: "The most powerful lever in the harness. They combine context injection with executable logic. Loaded on-demand so they don't consume your context budget.",
    },
    feat1Title: {
      es: "Carga on-demand",
      en: "On-demand loading",
    },
    feat1Desc: {
      es: "Solo una descripción corta en contexto; el contenido completo se inyecta al invocar",
      en: "Only a short description stays in context; full content injected when invoked",
    },
    feat2Title: {
      es: "Dos sabores",
      en: "Two flavors",
    },
    feat2Desc: {
      es: "Reference skills (conocimiento) y task skills (instrucciones paso a paso)",
      en: "Reference skills (knowledge) and task skills (step-by-step instructions)",
    },
    feat3Title: {
      es: "Scripts ejecutables",
      en: "Executable scripts",
    },
    feat3Desc: {
      es: "Pueden empaquetar y ejecutar scripts, haciendo la extensibilidad infinita",
      en: "Can bundle and execute scripts, making extensibility essentially infinite",
    },
    feat4Title: {
      es: "Sub-agentes aislados",
      en: "Isolated sub-agents",
    },
    feat4Desc: {
      es: "Se ejecutan con su propia ventana de contexto limpia",
      en: "Run in isolated sub-agents with their own clean context window",
    },
    insight: {
      es: "Skills son unidades programables, context-aware y componibles de comportamiento del agente.",
      en: "Skills are programmable, context-aware, composable units of agent behavior.",
    },
  },

  // Slide 11: Spec Driven Development
  specDrivenDev: {
    title: {
      es: "Spec Driven Development",
      en: "Spec Driven Development",
    },
    subtitle: {
      es: "Uno de los mayores cuellos de botella con los coding agents está entre la silla y la pantalla: tú. El input inicial vago fuerza al agente a predecir la implementación correcta.",
      en: "One of the top bottlenecks with coding agents sits between the chair and the screen: you. Vague initial input forces the agent to predict the correct implementation.",
    },
    problemTitle: { es: "El problema", en: "The problem" },
    badPrompt: {
      es: '"Haz una feature para agregar items desde el backoffice"',
      en: '"Make a new feature to add new items from the backoffice"',
    },
    problemDesc: {
      es: "No especifica stack, ubicación del backoffice, contratos de API, dónde almacenar, idempotencia, roles de acceso...",
      en: "Doesn't specify stack, backoffice location, API contracts, storage, idempotency, access roles...",
    },
    specTitle: { es: "El spec incluye", en: "A spec includes" },
    spec1: {
      es: "Qué hace la feature",
      en: "What the feature does",
    },
    spec2: {
      es: "Cómo se integra con código existente",
      en: "How it integrates with existing code",
    },
    spec3: {
      es: "Cuáles son los edge cases",
      en: "What the edge cases are",
    },
    spec4: {
      es: "Criterios de aceptación",
      en: "Acceptance criteria",
    },
    spec5: {
      es: "Plan de testing",
      en: "Test plan",
    },
    insight: {
      es: "El spec se convierte en el harness. Consolida custom rules, guía paso a paso y criterios de aceptación en un solo artefacto. Y puedes usar el agente para escribir los specs.",
      en: "The spec becomes the harness. It consolidates custom rules, step-by-step guidance, and acceptance criteria into a single artifact. And you can use the agent to write the specs too.",
    },
  },

  // Slide 12: Questions
  questions: {
    title: { es: "¿Preguntas?", en: "Questions?" },
  },
} as const;

export type Translations = typeof translations;

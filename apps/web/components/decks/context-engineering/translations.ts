export const translations = {
  scanMe: { es: "Escaneame", en: "Scan me" },
  nav: { es: "← → para navegar", en: "← → to navigate" },

  // Slide 1: What is an Agent?
  whatIsAgent: {
    title: { es: "¿Qué es un Agente?", en: "What is an Agent?" },
    desc: {
      es: "Un LLM que puede tomar acciones en un loop hasta completar una tarea.",
      en: "An LLM that can take actions in a loop until a task is complete.",
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

  // Slide 7: CE in Coding Agents
  codingAgents: {
    title: {
      es: "Context Engineering en Coding Agents",
      en: "Context Engineering in Coding Agents",
    },
    subtitle: { es: "Ejemplos del mundo real", en: "Real-world examples" },
    claudeCode: {
      es: "CLAUDE.md + Rules + Skills + Hooks",
      en: "CLAUDE.md + Rules + Skills + Hooks",
    },
    cursorWindsurf: {
      es: "archivos .rules + skills",
      en: ".rules files + skills",
    },
    langchain: {
      es: "Middleware + contexto dinámico",
      en: "Middleware + dynamic context",
    },
    result: {
      es: "Resultado: Código listo para producción en grandes codebases",
      en: "Result: Production-ready code on large codebases",
    },
  },

  // Slide 8: Best Practices & Tools
  bestPractices: {
    title: { es: "Mejores Prácticas", en: "Best Practices" },
    practice1: {
      es: "Empezar mínimo → iterar sobre fallos",
      en: "Start minimal → iterate on failures",
    },
    practice2: {
      es: "Usar markdown para reglas/skills/specs",
      en: "Use markdown for rules/skills/specs",
    },
    practice3: {
      es: "Lazy-load + comprimir agresivamente",
      en: "Lazy-load + compress aggressively",
    },
    practice4: {
      es: "Aislar contextos (sub-agentes, entornos)",
      en: "Isolate contexts (sub-agents, environments)",
    },
    practice5: {
      es: 'Hacer el codebase "AI-friendly" (estructura clara)',
      en: 'Make codebase "AI-friendly" (clear structure)',
    },
    toolsTitle: { es: "Herramientas", en: "Tools" },
    tool1: { es: "Servidores MCP", en: "MCP servers" },
    tool2: { es: "Skills", en: "Skills" },
    tool3: { es: "Memoria agéntica", en: "Agentic memory" },
    tool4: { es: "Middleware de resumen", en: "Summarization middleware" },
  },

  // Slide 9: Benefits & Challenges
  benefitsChallenges: {
    title: { es: "Beneficios y Desafíos", en: "Benefits & Challenges" },
    benefitsTitle: { es: "Beneficios", en: "Benefits" },
    benefit1: {
      es: "60–80% más confiable en tareas multi-paso",
      en: "60–80% more reliable multi-step tasks",
    },
    benefit2: {
      es: "Menor costo y latencia (86% reportado en algunos casos)",
      en: "Lower cost & latency (86% reported in some cases)",
    },
    benefit3: {
      es: "Agentes que realmente mejoran con el tiempo",
      en: "Agents that actually improve over time",
    },
    challengesTitle: { es: "Desafíos", en: "Challenges" },
    challenge1: {
      es: "La degradación del contexto sigue siendo posible",
      en: "Context rot still possible",
    },
    challenge2: {
      es: "El no-determinismo requiere supervisión humana",
      en: "Non-determinism requires human oversight",
    },
    challenge3: {
      es: "Compartir contexto entre equipos/entornos",
      en: "Sharing context across teams/environments",
    },
  },

  // Slide 10: How to Get Started
  getStarted: {
    title: { es: "Cómo Empezar Hoy", en: "How to Start Today" },
    step1: {
      es: "Agregá un CLAUDE.md o archivo de reglas a tu proyecto",
      en: "Add a CLAUDE.md or rules file to your project",
    },
    step2: {
      es: "Experimentá con skills y herramientas just-in-time",
      en: "Experiment with skills & just-in-time tools",
    },
    step3: {
      es: "Implementá una estrategia de compactación o memory notes",
      en: "Implement one compaction or memory note strategy",
    },
    step4: {
      es: "Medí la tasa de éxito del loop antes/después",
      en: "Measure loop success rate before/after",
    },
    future: {
      es: "Futuro: Context engineering = el full-stack de los agentes de IA",
      en: "Future: Context engineering = the full-stack of AI agents",
    },
    questions: { es: "¿Preguntas?", en: "Questions?" },
  },
} as const;

export type Translations = typeof translations;

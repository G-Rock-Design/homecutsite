// Base de dados centralizada do site
const HomeCutData = {
  unidades: [
    {
      id: "botafogo",
      nome: "Botafogo",
      cidade: "Rio de Janeiro",
      endereco: "R. São Clemente, 359a — Botafogo, Rio de Janeiro — RJ, CEP 22260-009",
      telefone: "97024-7926",
      horarios: {
        semana: "Segunda a sexta-feira: 10h às 20h",
        sabado: "Sábado: 9h às 18h",
        domingo: "Domingo: fechado"
      },
      equipe: [
        { nome: "Cadu", foto: "assets/cadu.jpeg", pos: "object-center" },
        { nome: "Rhuan C.", foto: "assets/rhuan.jpeg", pos: "object-center" },
        { nome: "Rico", foto: "assets/rico.jpeg", pos: "object-center" },
        { nome: "Silvia", foto: "assets/silvia.jpeg", pos: "object-center" }
      ],
      diferencial: "Referência em prótese capilar, resgatando a autoestima com discrição.",
      linkAgendamento: "https://sites.appbarber.com.br/homecutbarberbo-zocs",
      fotosEspaco: []
    },
    {
      id: "jardim-primavera",
      nome: "Jardim Primavera",
      cidade: "Duque de Caxias",
      endereco: "Estr. das Mirindibas, 18 — Jardim Primavera, Duque de Caxias — RJ, CEP 25215-355",
      telefone: "(21) 97095-2626",
      horarios: {
        semana: "Segunda a sexta-feira: 9h às 20h",
        sabado: "Sábado: 9h às 19h",
        domingo: "Domingo: fechado"
      },
      equipe: [
        { nome: "Fabio Bastos", foto: "assets/fabio.jpeg", pos: "object-center" },
        { nome: "Guigo", foto: "assets/guigo.jpeg", pos: "object-center" },
        { nome: "Leo", foto: "assets/leo.jpeg", pos: "object-center" },
        { nome: "Thales", foto: "assets/thales.jpeg", pos: "object-center" }
      ],
      diferencial: "Serviços premium de cabelo, barba e cuidados pessoais.",
      linkAgendamento: "https://sites.appbarber.com.br/homecutbarber-sjd9",
      fotosEspaco: []
    },
    {
      id: "xerem",
      nome: "Xerém",
      cidade: "Duque de Caxias",
      endereco: "R. Marcio S. Silva — Xerém, Duque de Caxias — RJ, CEP 25250-410",
      telefone: "(21) 97024-7926",
      horarios: {
        semana: "Segunda a sexta-feira: 9h às 19h30",
        sabado: "Sábado: 8h às 17h",
        domingo: "Domingo: fechado"
      },
      equipe: [
        { nome: "Cadu", foto: "assets/cadu.jpeg", pos: "object-center" },
        { nome: "Fabio", foto: "assets/fabio.jpeg", pos: "object-center" },
        { nome: "Matheus", foto: "assets/matheus.jpg", pos: "object-center" }
      ],
      diferencial: "Destaque para o atendimento infantil com atenção dedicada.",
      linkAgendamento: "https://sites.appbarber.com.br/homecutbarberxr-b5wz"
    }
  ],
  socios: [
    {
      nome: "Cadu",
      cargo: "CEO, Educador, Palestrante, Barbeiro",
      instagram: "https://www.instagram.com/cadubarber.rj/",
      descricao: "Lidera a marca com visão empreendedora, atuando como educador e disseminando técnicas de excelência no mercado."
    },
    {
      nome: "Fabio Bastos",
      cargo: "Fundador e Especialista em Formação",
      instagram: "https://www.instagram.com/fabioo.bastos/",
      descricao: "Fundador da marca e profissional dedicado à formação técnica de barbeiros, garantindo o padrão Home Cut."
    }
  ],
  servicos: {
    botafogo: [
      { categoria: "Cabelo", itens: ["Corte todo na tesoura", "Corte à máquina — 1 pente", "Corte navalhado", "Corte feminino curto", "Corte feminino médio", "Corte feminino longo", "Corte infantil", "Corte com máquina e tesoura", "Corte masculino longo", "Escova em cabelo curto", "Escova média", "Lavagem de cabelo feminino", "Lavagem de cabelo", "Penteado masculino", "Visagismo"] },
      { categoria: "Barba", itens: ["Barba", "Barba e pezinho", "Barboterapia", "Pigmentação de barba", "Pezinho"] },
      { categoria: "Prótese Capilar", itens: ["Avaliação de prótese capilar", "Colocação de prótese capilar", "Manutenção de prótese capilar"] },
      { categoria: "Estética e Cuidados", itens: ["Design simples", "Design com henna", "Limpeza de sobrancelha com navalha", "Limpeza de pele", "Maquiagem social", "Buço", "Depilação de nariz com cera", "Depilação de orelha com cera", "Blindagem", "Selagem feminina", "Selagem masculina", "Hidratação capilar feminina", "Hidratação capilar masculina", "Aplicação de coloração feminina", "Aplicação de tinta", "Aplicação de tinta masculina"] },
      { categoria: "Unhas", itens: ["Mão", "Mão com esmaltação em gel", "Pé", "Pé com esmaltação em gel", "Pé e mão", "Spa dos pés", "Alongamento em gel", "Banho em gel"] },
      { categoria: "Combos", itens: ["Combo barba e sobrancelha", "Combo barboterapia e sobrancelha", "Combo cabelo e barba", "Combo cabelo e barboterapia", "Combo cabelo e sobrancelha", "Combo cabelo, barba e sobrancelha", "Combo depilação de nariz e orelha", "Combo pezinho e limpeza de pele", "Combo pezinho e sobrancelha", "Dia do noivo — combo cabelo e barba simples", "Visagismo — combo cabelo e barba"] },
      { categoria: "Outros", itens: ["Corte em domicílio/hospital Quality Care", "Manutenção", "Remoção", "Remoção seguida de colocação"] }
    ],
    "jardim-primavera": [
      { categoria: "Cabelo", itens: ["Corte no estúdio — atendimento exclusivo", "Corte todo na tesoura", "Patrãozinho", "Reflexo", "Selagem de cabelo médio — somente a parte de cima", "Selagem de cabelo médio com as laterais", "Lavagem de cabelo", "Hidratação", "Visagismo", "Pezinho"] },
      { categoria: "Barba", itens: ["Visagismo de barba", "Pigmentação"] },
      { categoria: "Estética e Cuidados", itens: ["Limpeza de sobrancelha", "Depilação de nariz com cera", "Depilação de orelha com cera", "Limpeza de pele", "Limpeza de pele no estúdio"] },
      { categoria: "Combos e Outros", itens: ["Dia de patrão — combo cabelo e barboterapia", "Reagendamento"] }
    ],
    xerem: [] // Catalogo exato pendente
  }
};

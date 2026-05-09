export interface CaseStudy {
  id: string;
  company: string;
  logoInitials: string;
  serviceTag: string;
  shortDescription: string;
  imagePlaceholder: string;
  location: string;
  context: string;
  problem: string;
  solution: string;
  result: string;
  testimonial: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "senai-terraplenagem",
    company: "SENAI CIMATEC Park",
    logoInitials: "SC",
    serviceTag: "Terraplenagem",
    shortDescription:
      "Projeto executivo de terraplenagem para o CIMATEC Park",
    imagePlaceholder: "/images/cases/senai-terraplenagem.jpg",
    location: "Camaçari, BA",
    context:
      "Atuação no SENAI CIMATEC Park, com a necessidade de verificação técnica e compatibilização das informações do empreendimento para subsidiar a elaboração do projeto de terraplenagem.",
    problem:
      "Havia a necessidade de associar o layout arquitetônico ao projeto executivo de terraplenagem, garantindo que as soluções propostas fossem compatíveis com as premissas do contratante e com as condições técnicas do local.",
    solution:
      "Foi realizada a elaboração do projeto de terraplenagem, seguindo as premissas definidas pelo contratante e considerando a integração entre o layout arquitetônico e as necessidades executivas da obra.",
    result:
      "O projeto foi concluído com êxito, atendendo às expectativas do contratante e fornecendo uma base técnica adequada para a continuidade das etapas executivas.",
    testimonial:
      "O projeto desenvolvido atendeu às premissas estabelecidas e contribuiu para dar mais segurança técnica ao planejamento e à execução da terraplenagem.",
  },
  {
    id: "senai-eletrocentro",
    company: "SENAI CIMATEC Park",
    logoInitials: "SC",
    serviceTag: "Verificação Altimétrica",
    shortDescription:
      "Conferência altimétrica e posicional dos pilares do eletrocentro",
    imagePlaceholder: "/images/cases/senai-eletrocentro.jpg",
    location: "Camaçari, BA",
    context:
      "Atuação técnica no SENAI CIMATEC Park, voltada à verificação das condições reais de execução de elementos estruturais vinculados ao eletrocentro, com foco na conferência altimétrica e posicional dos pilares executados.",
    problem:
      "Era necessário realizar a verificação altimétrica e posicional dos pilares executados sobre o eletrocentro, a fim de identificar a situação real do local e fornecer dados técnicos confiáveis ao cliente.",
    solution:
      "A metodologia adotada para a verificação consistiu na utilização de estação total e nível óptico, permitindo a coleta dos dados necessários para análise da posição e das cotas dos pilares executados.",
    result:
      "Os dados foram obtidos e fornecidos ao cliente, possibilitando uma compreensão mais precisa da situação real do local e subsidiando a tomada de decisão com base em informações técnicas levantadas em campo.",
    testimonial:
      "A atuação técnica trouxe clareza sobre a situação real dos pilares executados, contribuindo para a segurança das decisões do cliente e reforçando sua satisfação com o serviço prestado.",
  },
  {
    id: "iberostar",
    company: "Iberostar Resort & Hotels",
    logoInitials: "IB",
    serviceTag: "Aerolevantamento",
    shortDescription:
      "Aerolevantamento técnico em área superior a 300 hectares na Praia do Forte",
    imagePlaceholder: "/images/cases/iberostar.jpg",
    location: "Praia do Forte, BA",
    context:
      "Atuação no Iberostar Resort & Hotels — Praia do Forte, com a realização de um aerolevantamento técnico em toda a área do hotel, superior a 300 hectares, visando gerar informações espaciais mais completas para apoio à tomada de decisão.",
    problem:
      "O cliente precisava de informações atualizadas e precisas sobre a área do empreendimento, de modo a compreender melhor a situação do local e utilizar esses dados como base para planejamento, análise e decisões técnicas.",
    solution:
      "Foi realizado um aerolevantamento com drone DJI Mavic 3E, contemplando a geração e entrega de produtos técnicos como ortofoto, MDT e MDS.",
    result:
      "O serviço forneceu ao cliente as informações necessárias para apoiar suas decisões, entregando uma base técnica atualizada, visual e precisa sobre a área levantada.",
    testimonial:
      "O trabalho foi muito bem recebido pelo cliente, que elogiou a qualidade das entregas e destacou a importância das informações geradas para apoiar suas decisões técnicas.",
  },
  {
    id: "lp-advocacia",
    company: "LP Advocacia Imobiliária",
    logoInitials: "LP",
    serviceTag: "Regularização Fundiária",
    shortDescription:
      "Apoio técnico na regularização de imóveis urbanos e rurais",
    imagePlaceholder: "/images/cases/lp-advocacia.jpg",
    location: "Salvador, BA",
    context:
      "Atuação junto à LP Advocacia Imobiliária, escritório de advocacia especializado na regularização de imóveis urbanos e rurais, com demandas técnicas vinculadas à elaboração de peças e cadastros necessários aos processos de regularização.",
    problem:
      "O escritório possuía diversas demandas envolvendo a regularização de imóveis urbanos e rurais, incluindo a necessidade de apoio técnico na elaboração da parte cadastral, como CAR, CCIR, ITR e CIB.",
    solution:
      "Foi disponibilizada uma equipe técnica especializada, com atuação voltada ao atendimento das demandas da cliente e à elaboração das peças técnicas e cadastrais necessárias para os processos conduzidos pelo escritório.",
    result:
      "A atuação resultou em compromisso com as entregas e êxito contínuo na elaboração das peças técnicas, contribuindo para o andamento dos processos de regularização imobiliária conduzidos pela cliente.",
    testimonial:
      "A parceria tem sido marcada por compromisso, qualidade técnica e segurança nas entregas, contribuindo diretamente para o sucesso das demandas de regularização imobiliária.",
  },
  {
    id: "geoax",
    company: "Geoax Engenharia",
    logoInitials: "GX",
    serviceTag: "Levantamento Topográfico",
    shortDescription:
      "Levantamento topográfico planialtimétrico para projetos geotécnicos",
    imagePlaceholder: "/images/cases/geoax.jpg",
    location: "Bahia",
    context:
      "Atuação junto à Geoax Engenharia, com apoio técnico em diferentes demandas que exigiram levantamento topográfico planialtimétrico e aerolevantamentos.",
    problem:
      "A cliente necessitava de informações técnicas de campo para subsidiar a elaboração de projetos de estabilização e projetos geotécnicos, exigindo dados confiáveis sobre as condições reais das áreas analisadas.",
    solution:
      "Foram utilizados equipamentos de alta precisão, incluindo GNSS, drone e estação total, permitindo a execução dos levantamentos necessários e o fornecimento de soluções adequadas às demandas da cliente.",
    result:
      "As informações foram levantadas e encaminhadas com êxito, atendendo às necessidades técnicas da Geoax Engenharia e contribuindo para o desenvolvimento dos projetos de estabilização e geotécnicos.",
    testimonial:
      "A atuação técnica foi elogiada pela qualidade das informações entregues, pela precisão dos levantamentos e pelo compromisso em atender às necessidades dos projetos.",
  },
  {
    id: "seazone",
    company: "Seazone",
    logoInitials: "SZ",
    serviceTag: "Alvará e Aprovação",
    shortDescription:
      "Levantamentos técnicos para obtenção de alvará em Salvador/BA",
    imagePlaceholder: "/images/cases/seazone.jpg",
    location: "Salvador, BA",
    context:
      "Atuação junto à Seazone, empresa que atua na incorporação de imóveis, com demandas técnicas voltadas ao desenvolvimento de novos empreendimentos na cidade de Salvador/BA.",
    problem:
      "A cliente possuía demandas relacionadas à obtenção de alvará junto à Prefeitura de Salvador, exigindo levantamentos técnicos e elaboração de peças específicas para subsidiar os processos de aprovação dos novos empreendimentos.",
    solution:
      "Foram realizados levantamentos técnicos e elaboradas as peças técnicas necessárias para atender às exigências do processo de obtenção de alvará, conforme as demandas apresentadas pela cliente.",
    result:
      "As peças técnicas foram executadas com êxito, contribuindo para o andamento dos processos junto à Prefeitura de Salvador e gerando satisfação total da cliente com as entregas realizadas.",
    testimonial:
      "A atuação técnica foi elogiada pela qualidade das entregas, pelo compromisso com os prazos e pela segurança transmitida durante a elaboração das peças necessárias aos processos de aprovação.",
  },
  {
    id: "seazone",
    company: "Seazone",
    logoInitials: "SZ",
    serviceTag: "Alvará e Aprovação",
    shortDescription:
      "Levantamentos técnicos para obtenção de alvará em Salvador/BA",
    imagePlaceholder: "/images/cases/seazone.jpg",
    location: "Salvador, BA",
    context:
      "Atuação junto à Seazone, empresa que atua na incorporação de imóveis, com demandas técnicas voltadas ao desenvolvimento de novos empreendimentos na cidade de Salvador/BA.",
    problem:
      "A cliente possuía demandas relacionadas à obtenção de alvará junto à Prefeitura de Salvador, exigindo levantamentos técnicos e elaboração de peças específicas para subsidiar os processos de aprovação dos novos empreendimentos.",
    solution:
      "Foram realizados levantamentos técnicos e elaboradas as peças técnicas necessárias para atender às exigências do processo de obtenção de alvará, conforme as demandas apresentadas pela cliente.",
    result:
      "As peças técnicas foram executadas com êxito, contribuindo para o andamento dos processos junto à Prefeitura de Salvador e gerando satisfação total da cliente com as entregas realizadas.",
    testimonial:
      "A atuação técnica foi elogiada pela qualidade das entregas, pelo compromisso com os prazos e pela segurança transmitida durante a elaboração das peças necessárias aos processos de aprovação.",
  },
];

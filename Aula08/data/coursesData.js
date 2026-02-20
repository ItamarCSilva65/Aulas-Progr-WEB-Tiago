// data/coursesData.js

const courses = [
    {
        id: 'iso-9001',
        nome: 'ISO 9001:2015',
        titulo_completo: 'Sistema de Gestão da Qualidade (SGQ)',
        preco: 299.90,
        desc: 'Domine os requisitos para implementar um sistema de gestão da qualidade focado na satisfação do cliente e melhoria contínua.',
        // Imagem real de escritório corporativo/reunião
        img: '9001.1.png',
        destaque: true
    },
    {
        id: 'iso-14001',
        nome: 'ISO 14001:2015',
        titulo_completo: 'Sistema de Gestão Ambiental (SGA)',
        preco: 299.90,
        desc: 'Aprenda a gerenciar responsabilidades ambientais de forma sistemática, contribuindo para o pilar ambiental da sustentabilidade.',
        // Imagem real de natureza/sustentabilidade
        img: '14001.1.png',
        destaque: true
    },
    {
        id: 'iso-45001',
        nome: 'ISO 45001:2018',
        titulo_completo: 'Gestão de Saúde e Segurança Ocupacional',
        preco: 349.90,
        desc: 'O padrão internacional para reduzir riscos ocupacionais e proporcionar locais de trabalho seguros e saudáveis.',
        // Imagem real de engenharia/segurança
        img: '45001.1.png',
        destaque: true
    },
    {
        id: 'iso-13485',
        nome: 'ISO 13485:2016',
        titulo_completo: 'Dispositivos Médicos - SGQ',
        preco: 399.90,
        desc: 'Requisitos específicos para sistemas de gestão da qualidade na indústria de dispositivos médicos.',
        // Imagem real de laboratório médico
        img: '13485.1.png',
        destaque: false
    },
    {
        id: 'iso-17025',
        nome: 'ISO/IEC 17025:2017',
        titulo_completo: 'Competência de Laboratórios',
        preco: 450.00,
        desc: 'A norma essencial para laboratórios que desejam demonstrar competência técnica e resultados válidos.',
        // Imagem real de cientista/microscópio
        img: '17025.png',
        destaque: false
    },
    {
        id: 'iso-19011',
        nome: 'ISO 19011:2018',
        titulo_completo: 'Diretrizes para Auditoria',
        preco: 250.00,
        desc: 'Torne-se um auditor interno. Aprenda a planejar e realizar auditorias de acordo com as melhores práticas.',
        // Imagem real de documentos/checklists
        img: '19011.png',
        destaque: false
    }
];

module.exports = courses;
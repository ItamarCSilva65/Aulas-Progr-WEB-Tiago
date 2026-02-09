// data/coursesData.js

const courses = [
    {
        id: 'iso-9001',
        nome: 'ISO 9001:2015',
        titulo_completo: 'Sistema de Gestão da Qualidade (SGQ)',
        preco: 299.90,
        desc: 'Domine os requisitos para implementar um sistema de gestão da qualidade focado na satisfação do cliente e melhoria contínua.',
        // Imagem real de escritório corporativo/reunião
        img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: true
    },
    {
        id: 'iso-14001',
        nome: 'ISO 14001:2015',
        titulo_completo: 'Sistema de Gestão Ambiental (SGA)',
        preco: 299.90,
        desc: 'Aprenda a gerenciar responsabilidades ambientais de forma sistemática, contribuindo para o pilar ambiental da sustentabilidade.',
        // Imagem real de natureza/sustentabilidade
        img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: true
    },
    {
        id: 'iso-45001',
        nome: 'ISO 45001:2018',
        titulo_completo: 'Gestão de Saúde e Segurança Ocupacional',
        preco: 349.90,
        desc: 'O padrão internacional para reduzir riscos ocupacionais e proporcionar locais de trabalho seguros e saudáveis.',
        // Imagem real de engenharia/segurança
        img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: true
    },
    {
        id: 'iso-13485',
        nome: 'ISO 13485:2016',
        titulo_completo: 'Dispositivos Médicos - SGQ',
        preco: 399.90,
        desc: 'Requisitos específicos para sistemas de gestão da qualidade na indústria de dispositivos médicos.',
        // Imagem real de laboratório médico
        img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: false
    },
    {
        id: 'iso-17025',
        nome: 'ISO/IEC 17025:2017',
        titulo_completo: 'Competência de Laboratórios',
        preco: 450.00,
        desc: 'A norma essencial para laboratórios que desejam demonstrar competência técnica e resultados válidos.',
        // Imagem real de cientista/microscópio
        img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: false
    },
    {
        id: 'iso-19011',
        nome: 'ISO 19011:2018',
        titulo_completo: 'Diretrizes para Auditoria',
        preco: 250.00,
        desc: 'Torne-se um auditor interno. Aprenda a planejar e realizar auditorias de acordo com as melhores práticas.',
        // Imagem real de documentos/checklists
        img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        destaque: false
    }
];

module.exports = courses;
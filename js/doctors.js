'use strict';

// 0 - doctorsStac, 1 - doctorsPolV, 2 - doctorsPolD
const data = [
    [
        {
            lastname: 'Афанасьева',
            firstName: 'Людмила',
            patronymic: 'Сергеевна',
            post: 'Медицинская сестра палатная',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'Харчиков',
            firstName: 'Кирилл',
            patronymic: 'Сергеевич',
            post: 'Главный врач',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Первая',
        },
    ],

    [
        {
            lastname: 'Травникова',
            firstName: 'Рано',
            patronymic: 'Кулдашевна',
            post: 'Заместитель главного врача по поликлинической работе',
            specialization: 'Терапия',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'Ефимова',
            firstName: 'Вера',
            patronymic: 'Евгеньевна',
            post: 'Заместитель главного врача по клинико-экспертной работе',
            specialization: 'Неврология',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
    ],

    [
        {
            lastname: 'Круть',
            firstName: 'Алина',
            patronymic: 'Сергеевна',
            post: 'Заместитель главного врача по поликлинической работе',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'Круть',
            firstName: 'Алина',
            patronymic: 'Сергеевна',
            post: 'Заместитель главного врача по поликлинической работе',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
    ]
];

const doctors = {
    data,
    doctorsBlock: document.querySelector('.persons'),

    render() {
        for (const el of this.data) {
            for (const item of el) {
                this.doctorsBlock.insertAdjacentHTML('beforeend', `
                    <div class="doctors_wrapper">
                        <div class="doctors_item">
                            <div class="doctors_name">
                                <p><span>${item.lastname}</span> ${item.firstName} ${item.patronymic}</p>
                                <p>${item.post}</p>
                            </div>
                            <div class="doctors_desc">
                                <p>Основная специализация:</p>
                                <h5>${item.specialization}</h5>
                                <p>Срок действия сертификата:</p>
                                <h5>${item.certificate}</h5>
                                <p>Квалификационная категория:</p>
                                <h5>${item.category}</h5>
                            </div>
                        </div>
                    </div>
                `);
            };
        };

        
    },
}

doctors.render();

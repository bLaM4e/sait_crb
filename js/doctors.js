'use strict';

const data = {
    stac: [
        {
            lastname: 'БАБИЧ',
            firstName: 'ОЛЬГА',
            patronymic: 'БОРИСОВНА',
            post: 'Врач приемного отделения',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ВЛАДИМИРОВА',
            firstName: 'ЛЮБОВЬ',
            patronymic: 'ВАЛЕРЬЕВНА',
            post: 'Врач приемного отделения',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
        {
            lastname: 'ВЯЗНИКОВЦЕВА',
            firstName: 'ЕЛЕНА',
            patronymic: 'ЮРЬЕВНА',
            post: 'Врач приемного отделения',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'МАТВЕЕВА',
            firstName: 'ЖАННА',
            patronymic: 'ЛЕОНИДОВНА',
            post: 'Врач приемного отделения',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'ТРУФАНОВА',
            firstName: 'ИРИНА',
            patronymic: 'АЛЕКСАНДРОВНА',
            post: 'Врач приемного отделения',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'ПЕТРОВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'ВИКТОРОВИЧ',
            post: 'Врач-травматолог-ортопед',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ТРИГУБ',
            firstName: 'НИКОЛАЙ',
            patronymic: 'АНДРЕЕВИЧ',
            post: 'Врач-травматолог-ортопед',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
        {
            lastname: 'КОРОВУШКИН',
            firstName: 'ВАЛЕРИЙ',
            patronymic: 'ГРИГОРЬЕВИЧ',
            post: 'Заведующий отделением – врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
        {
            lastname: 'ЗИНКИН',
            firstName: 'СЕРГЕЙ',
            patronymic: 'ГЕННАДЬЕВИЧ',
            post: 'Врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
        {
            lastname: 'КИСЕЛЕВ',
            firstName: 'ДМИТРИЙ',
            patronymic: 'ЕВГЕНЬЕВИЧ',
            post: 'Врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'КОРОБОВ',
            firstName: 'НИКОЛАЙ',
            patronymic: 'НИКОЛАЕВИЧ',
            post: 'Заведующий отделением – врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'БАЛДЕНКОВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'НИКОЛАЕВИЧ',
            post: 'врач-кардиолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ЗАХАРОВА',
            firstName: 'ЕЛЕНА',
            patronymic: 'НИКОЛАЕВНА',
            post: 'Заведующий отделением – врач-терапевт',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ЧУПИЛКО',
            firstName: 'ЮЛИЯ',
            patronymic: 'АНАТОЛЬЕВНА',
            post: 'Врач-терапевт',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
        },
        {
            lastname: 'ЗАЙЦЕВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'ИГОРЕВИЧ',
            post: 'врач-травматолог-ортопед',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'КОЧНЕВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'ЮРЬЕВИЧ',
            post: 'врач-травматолог-ортопед',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'ЗОТОВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'ЛЬВОВИЧ',
            post: 'Врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'КИСЕЛЕВ',
            firstName: 'ДМИТРИЙ',
            patronymic: 'ЕВГЕНЬЕВИЧ',
            post: 'Врач-хирург',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ЧУБУКОВ',
            firstName: 'СЕРГЕЙ',
            patronymic: 'АДОЛЬФОВИЧ',
            post: 'Заведующий отделением – врач анестезиолог-реаниматолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ГОНЧАРОВ',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'СЕРГЕЕВИЧ',
            post: 'Врач-анестезиолог-реаниматолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'ЗАПАНКОВ',
            firstName: 'ДЕНИС',
            patronymic: 'НИКОЛАЕВИЧ',
            post: 'Врач-анестезиолог-реаниматолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ИВАНОВ',
            firstName: 'МАКСИМ',
            patronymic: 'ВЯЧЕСЛАВОВИЧ',
            post: 'Врач-анестезиолог-реаниматолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: 'Высшая категория',
        },
        {
            lastname: 'ПРОЦЕНКО',
            firstName: 'АЛЕКСАНДР',
            patronymic: 'ЮРЬЕВИЧ',
            post: 'Врач-анестезиолог-реаниматолог',
            specialization: '',
            certificate: 'до 16.02.2024',
            category: '1 разряд (категория)',
        },
        {
            lastname: 'РЫБАЧКОВА',
            firstName: 'МАРИЯ',
            patronymic: 'ЮРЬЕВНА',
            post: 'Врач-анестезиолог-реаниматолог',
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

    adult: [
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
        {
            lastname: 'Ефимова',
            firstName: 'Вера',
            patronymic: 'Евгеньевна',
            post: 'Заместитель главного врача по клинико-экспертной работе',
            specialization: 'Неврология',
            certificate: 'до 16.02.2024',
            category: 'Без категории',
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

    children: [
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
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'САГАНДУКОВА',
            firstName: 'ЛЮБОВЬ',
            patronymic: 'АЛЕКСЕЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        {
            lastname: 'ВЕЛИКАНОВА',
            firstName: 'АННА',
            patronymic: 'ИГОРЕВНА',
            post: 'Заведующий отделением – врач-педиатр',
            specialization: 'Педиатрия',
            certificate: 'до 16.02.2024',
            category: '2 разряд (категория)',
        },
        
    ]
};

const doctors = {
    data,
    doctorsBlock: document.querySelector('.persons'),
    buildingBlock: document.querySelector('.doctors_building'),
    buttons: document.querySelectorAll('.building_button'),
    doctorsCards: '',

    init() {
        this.render();
        this.getDoctorsCards();
        this.buildingSelection();
    },

    getDoctorsCards() {
        this.doctorsCards = document.querySelectorAll('.doctors_wrapper');
    },

    render() {
        for (let el in this.data) {
            for (const item of this.data[el]) {
                this.doctorsBlock.insertAdjacentHTML('beforeend', `
                    <div class="doctors_wrapper ${el}">
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

    buildingSelection() {
        this.buildingBlock.addEventListener('click', e => {
            if (e.target.tagName !== 'BUTTON') return;

            this.buttonIllumination(e.target);

            this.rerender(e.target.id);
        });
    },

    buttonIllumination(button) {
        for (const el of this.buttons) {
            el.classList.remove('building_button_active');
        };

        button.classList.add('building_button_active');
    },

    rerender(buttonId) {
        for (const el of this.doctorsCards) {
            el.classList.remove('doctors_hide');

            if (buttonId === 'all') continue;

            if (el.classList[1] !== buttonId) {
                el.classList.add('doctors_hide');
            }
        }
    }
}

doctors.init();

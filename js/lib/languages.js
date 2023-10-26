// Языковой пакет
const languages = {
  pageTitle: {
    ru: "Бхактиведанта Бук Траст",
    en: "Bhaktivedanta Book Trust",
  },
  menu_1: {
    ru: "℗",
    en: "℗",
  },
  menu_2: {
    ru: "ИСТОРИЯ",
    en: "HISTORY",
  },
  menu_3: {
    ru: "Траст",
    en: "TRUST",
  },
  menu_4: {
    ru: "Видео",
    en: "VIDEO",
  },
  menu_5: {
    ru: "Заявления",
    en: "ANNOUNCEMENT",
  },
  menu_6: {
    ru: "АКТИВЫ",
    en: "ASSETS",
  },
  menu_7: {
    ru: "ДОКУМЕНТЫ",
    en: "DOCUMENTS",
  },
  mainTitle_1: {
    ru: "Бхактиведанта Бук Траст создан в 1972 году Бхактиведантой Свами Прабхупа̄дой, как инструмент, для управления авторскими правами, всех текстов издаваемых Ш́рӣлой Прабхупа̄дой.",
    en: "Bhaktivedanta Book Trust was established in 1972 by Bhaktivedanta Swami Prabhupāda as a tool to manage the copyright of all texts published by Śrīla Prabhupāda.",
  },
  mainTitle_2: {
    ru: "Основные функции ББТ, это руководство всей деятельностью по публикации, тиражированию и распространению книг переданных на хранение в Траст, и распределение средств фонда недвижимого имущества ИСККОН.",
    en: "The main functions of the BBT are the management of all activities for the publication, reproduction and distribution of books deposited in the Trust, and the distribution of funds from the ISKCON Building fund.",
  },
  mainSubTitle_1: {
    ru: "Информация",
    en: "Info",
  },
  mainSubTitle_2: {
    ru: "Внимание",
    en: "Attention",
  },
  mainInfo_1: {
    ru: "Бхактиведанта Бук Траст является единственным обладателем авторских прав на все написанные Ш́рӣлой Прабхупа̄дой книги (согласно Трастовому договору). Поскольку Траст является безотзывным, поэтому пока существует ТРАСТ (сущуствуют законно назначенные Попечители),  действия международных законов о передачи авторских прав по истечению 40 лет, родственникам автора или в публичное пользование, <b>не распространяется</b>.  Безотзывный Траст имеет силу посмертного завещания, которое невозможно отменить! Cогласно Трастовому договору в случае прекращения существования этого Траста, авторские права передаются <b>только единственному</b> бенефициару, первоначальной корпорации ИСККОН, зарегистрированной в 1966 году в Нью-Йорке.",
    en: "Bhaktivedanta Book Trust is the sole owner of the copyright for all books written by Śrīla Prabhupāda (according to the Trust agreement). Since the Trust is irrevocable, therefore, as long as the TRUST exists (there are legally appointed Trustees), international laws on the transfer of copyright after 40 years, to the relatives of the author or to the public, <b>do not apply</b>. An irrevocable Trust has the power of a posthumous will that cannot be revoked! According to the Trust agreement, in the event of the termination of this Trust the copyright is transferred <b>only</b> to the sole beneficiary the original ISKCON corporation registered in 1966 in New York.",
  },
  mainInfo_2: {
    ru: "-Не является юридическим лицом. <br> -Траст, это особая форма управления активами или  соглашение, между учредителем Траста, Бхактиведантой Свами Прабхупа̄дой, бенефициарием (выгодополучателем), ИСККОН, созданным в 1966 году в Нью-Йорке и доверительными управляющими (Попечителями). <br> -Бхактиведанта Бук Траст никогда не был издательством. <br> -Бхактиведанта Бук Траст является безотзавным Трастом, который нельзя ни отменить ни изменить.",
    en: "-Not a legal entity. <br> -A Trust is a special form of asset management or agreement between the founder of the Trust, Bhaktivedanta Swami Prabhupāda, the beneficiary, ISKCON, established in 1966 in New York and Trustees. <br> -Bhaktivedanta Book Trust has never been a publishing house. <br> -Bhaktivedanta Book Trust is an irrevocable Trust that cannot be canceled or altered.",
  },
  attentionSubTitle_1: {
    ru: "ЛОЖНЫЕ ПОПЕЧИТЕЛИ:",
    en: "FALSE TRUSTEES:",
  },
  attentionSubTitle_2: {
    ru: "ИНФОРМАЦИЯ О ЛОЖНЫХ ОРГАНИЗАЦИЯХ:",
    en: "INFORMATION ABOUT FAKE ORGANIZATIONS:",
  },
  attentionItem_1: {
    ru: "Рамешвара Прабху",
    en: "Rameswara Prabhu",
  },
  attentionItem_2: {
    ru: "Харикеша Свами",
    en: "Harikesha Swami",
  },
  attentionItem_3: {
    ru: "Тамал Кришна Махарадж",
    en: "Tamal Krishna Maharaj",
  },
  attentionItem_4: {
    ru: "Гопал Кришна Махарадж",
    en: "Gopal Krishna Maharaj",
  },
  attentionItem_5: {
    ru: "Гопал Бхатта Прабху",
    en: "Gopal Bhatta Prabhu",
  },
  attentionItem_6: {
    ru: "Ложная структура выставляющая себя за Бхактиведанта Бук Траст - Корпорация ББТ Интернешнл, зарегистрированная в 1988 году.",
    en: "A false structure posing as Bhaktivedanta Book Trust - BBT International Corporation, incorporated in 1988.",
  },
  attentionItem_7: {
    ru: "Ложная организация выставляющая себя за ИСККОН - Религиозное Общество ДжиБиСи западная Бенгалия, зарегистрированная в 1993 году.",
    en: "A false organization posing as ISKCON is the GBC Religious Society of West Bengal, registered in 1993.",
  },
  footerLink_1: {
    ru: "Заявления",
    en: "Announcement",
  },
  footerLink_22: {
    ru: 'href="https://www.youtube.com/playlist?list=PL3dNiCipcYFN8Xi8JcyxXp6B-WSHxx1B4"',
    en: 'href="https://www.youtube.com/playlist?list=PL3dNiCipcYFN8Xi8JcyxXp6B-WSHxx1B4"',
  },
  footerLink_2: {
    ru: "Видео",
    en: "Video",
  },
  footerLink_3: {
    ru: "История ББТ",
    en: "BBT history",
  },
  footerLink_4: {
    ru: "Активы Траста",
    en: "Trust assets",
  },
  footerLink_5: {
    ru: "Юридические документы",
    en: "Legal documents",
  },
  footerLink_6: {
    ru: "Траст",
    en: "Trust",
  },
  footerContact: {
    ru: "Свяжитесь с нами:",
    en: "Contact with us:",
  },
  historyTitle: {
    ru: "История ББТ",
    en: "BBT HISTORY",
  },
  historyItem_1: {
    ru: "Мы все хорошо знаем, что Ш́рӣла Прабхупа̄да является Основателем-А̄ча̄рьей международного общества  сознания Кришны, которое он основал в Нью-Йорке в 1966 году, также нам хорошо известно, что Шрила Прабхупада был автором многочисленных книг духовной литературы, таких как:",
    en: "We are all well aware that Śrīla Prabhupāda is the Founder-Ācārya of the International Society for Krishna Consciousness, which he founded in New York in 1966, and we are well aware that Śrīla Prabhupāda was the author of numerous books of spiritual literature, such as:",
  },
  historyItem_2: {
    ru: '<a href="book.html">Бхагавад-гӣта̄ Как Она Есть</a> <br> Ш́рӣмад-Бха̄гаватам <br> Ш́рӣ Чайтанья-чарита̄мр̣ита <br> Журнал «Назад к Богу» <br> КР̣ШН̣А, Высочайшая Персональность Бога <br> За гранью Рождения и Смерти <br> Совершенство Йоги <br> Лёгкое Путешествие к Другим Планетам <br> Нектар Наставлений <br> Нектар Преданности <br> Ш́рӣ Ӣш́опанишад <br> СОЗНАНИЕ КР̣ШН̣Ы:  Высшая Система Йоги  <br> Сознание Кр̣шн̣ы, НЕПРЕВЗОЙДЕННЫЙ ДАР  <br> Учения Господа Чайтаньи <br> Учения Господа Капилы <br> КР̣ШН̣А, Резервуар Наслаждения <br> На Пути к КР̣ШН̣Е <br> ТРАНСЦЕНДЕНТАЛЬНОЕ Учение Прахлады Махараджа <br> Господь Чайтанья в пяти ипостасях  <br> РА̄ДЖА-ВИДЬЯ̄ ЦАРЬ ЗНАНИЯ <br> Возвышение к Сознанию Кр̣шн̣ы',
    en: '<a href="book.html">Bhagavad-gītā As It Is</a> <br> Śrīmad-Bhāgavatam <br> Śrī Caitanya-caritāmṛita <br> Back to Godhead Magazine <br> KṚṢṆA: The Supreme Personality of Godhead <br> Beyond Birth and Death <br> The Perfection of Yoga <br> Easy Journey to Other Planets <br> The Nectar of Instruction <br> The Nectar of Devotion <br> Śrī Īśopanisad <br> KṚṢṆA CONSCIOUSNESS: The Topmost Yoga System <br> Kṛṣṇa Consciousness, THE MATCHLESS GIFT <br> Teachihgs of Lord Caitanya <br> Teachings of Lord Kapila <br> KṚṢṆA the Reservoir of Pleasure <br> On the Way to KṚṢṆA <br> TRANSCENDENTAL Teachings Of Prahlad Maharaj <br> Lord Caitanya in five features <br> RĀJA-VIDYĀ The KING OF KNOWLEDGE <br> Elevation to Kṛṣṇa Consciousness',
  },
  historyText: {
    ru: "и что вся эта литература, основанная на оригинальных Ведах, широко известна для многих читателей по всему миру и естественно Ш́рӣла Прабхупа̄да, как автор этой уникальной духовной литературы. Когда  он писал эту литературу, то возникли очень серьезные вопросы сохранности этой литературы, потому что этот вопрос наиболее актуален именно для духовной литературы, потому что духовная литература, не просто чья-то спекуляция или чей-то домысел, это реальная  инструкциия и руководство к действию, как нужно делать, как поступать для того чтобы добиться каких-то определенных духовных результатов в жизни, и поэтому такая литература особенно нуждается в защите, чтобы  никто ее не переписывал, не менял ни как, и поэтому Ш́рӣла Прабхупа̄да решил использовать Траст в  качестве  инструмента для сохранности и процессинга авторских прав.",
    en: "and that all this literature based on the original Vedas is widely known to many readers around the world and naturally Śrīla Prabhupāda, as the author of this unique spiritual literature, is also known. When he wrote this literature, very serious questions arose about the safety of this literature, because this issue is most relevant for spiritual literature, because spiritual literature is not just someone's speculation, it is real instructions and a guide to action, how to do it, how to act in order to achieve certain spiritual results in life, and therefore such literature is especially in need of protection so that no one rewrites it, does not change it in any way, and therefore Śrīla Prabhupāda decided to use the Trust as a tool for preserving and processing copyright rights.",
  },
  historyButton: {
    ru: "Подробнее",
    en: "Read more",
  },
  trustTitle: {
    ru: "ТРАСТ",
    en: "Trust",
  },
  trustBlockTitle: {
    ru: "УЧРЕДИТЕЛЬ ТРАСТА",
    en: "Founder of the TRUST",
  },
  trustBlockText_1: {
    ru: "Единственный учредитель траста это Бхактиведанта Свами Прабхупа̄да. Являясь единственным учредителем, одновременно являлся старшим Попечителем созданного им Траста.",
    en: "The sole founder of the Trust is Bhaktivedanta Swami Prabhupāda. As the sole founder, at the same time he was the senior Trustee of the Trust he created.",
  },
  trustBlockText_2: {
    ru: "-Основатель-А̄ча̄рья Международного общества сознания Кришны зарегестрированного в 1966 году в Нью-Йорке. <br> -Является автором многочисленных книг по духовной тематике, а также переводчиком с санскрита и бенгали, таких книг, как Бхагавад-гӣта̄ Как Она Есть, Ш́рӣмад-Бха̄гаватам, Ш́рӣ Чайтанья-чарита̄мр̣ита, Ш́рӣ Ӣш́опанишад, Бхакти-раса̄мр̣ита-синдху, Ш́рӣ Упадеш́а̄мир̣та.",
    en: "-Founder-Ācārya of the International Society for Krishna Consciousness registered in 1966 in New York. <br> -He is the author of numerous books on spiritual subjects, as well as a translator from Sanskrit and Bengali, such books as Bhagavad-gītā As It Is, Śrīmad-Bhāgavatam, Śrī Caitanya-caritāmṛita, Śrī Īśopanisad, Bhakti-rasāmṛta-sindhu, Śrī  Upadeśāmiṛta.",
  },
  trustBlockText_3: {
    ru: "Авторские права на написанную литературу являются собственностью и активом Траста (согласно Трастовому договору).",
    en: "Copyright in written literature is the property and asset of the Trust (according to the Trust Agreement).",
  },
  trusteesTitle: {
    ru: `Попечители`,
    en: `Trustees`,
  },
  trusteesSubtitle_1: {
    ru: `Процедура назначения Попечителей`,
    en: `Procedure for appointing a Trustees`,
  },
  trusteesSubtitle_2: {
    ru: `Права и обязанности Попечителей`,
    en: `Rights and obligations of Trustees`,
  },
  trusteesItem_1: {
    ru: "Попечители, которые указанны в Трастовом соглашении назначаются пожизненно. В случае смерти или недееспособности кого-либо из указанных Попечителей, по какой бы то не было причине, оставшийся  Попечитель (или несколько Попечителей),  могут назначать  Попечителя или Попечителей-преемников с тем условием, что в Трасте одновременно будут действовать не более (5) Попечителей.",
    en: "The Trustees named in the Trust agreement are appointed for life. In the event of the death or failure to act for any reason of any of said Trustees, a successor Trustee or Trustees may be appointed by the remaining Trustees, with never more than five (5) Trustees acting at one time.",
  },
  trusteesItem_2: {
    ru: "Доверительные управляющие:",
    en: "Trustees:",
  },
  trusteesItem_2_list: {
    ru: "А.Ч. Бхактиведанта Свами Прабхупāда<br> Карандхар даса Адхикари <br> Бали Мардан даса Брахмачари <br> Хансадутта дас Адхикари <br> Абхиманью дас <br> Х1(Информация закрыта для публичного доступа) <br> Х2(Информация закрыта для публичного доступа) <br> Кришна Према(Попечительство анулированно). Исключён из состава Попечителей в связи с нарушением Трастового договора в апреле 2020 года.",
    en: "A.C. Bhaktivedanta Swami Prabhupāda<br> Karandhar dasa Adhikary <br> Bali Mardan dasa Brahmachary <br> Hansadutta das Adhikari <br> Abhimanyu das <br> X1 (Information is closed for public access) <br> X2 (Information is closed for public access) <br> Krishna Prema (Trusteeship annulled) Excluded from the Trustees in connection with the violation of the Trust agreement in April 2020.",
  },
  trusteesItem_3: {
    ru: 'Сбор доходов от продажи книг, что составляет 100% от всех поступающих из всех Храмов ИСККОН и делить эти средства на два фонда: половина (1/2)  для фонда, называемого Книжным фондом и половину (1/2) для фонда, называемого Фондом Недвижимого Имущества. <div style="text-indent:11px;"> Доходы, выделенные в Книжный фонд, будут использованы для следующих целей, все по усмотрению Попечителей, которым я полностью доверяю:</div>',
    en: 'The Trustees shall collect all proceeds from the sale of my books, that is One Hundred Percent (100%) of all the proceeds from all of the International Society for Krishna Consciousness Temples and divide these proceeds into two funds, one-half (1/2) for the fund known as the Book Fund, and one-half (1/2) for the fund known as the Building Fund. <div style="text-indent:11px;">The proceeds allocated to the Book Fund shall be used for the following purposes, all in the discretion of the Trustees, in whom I have complete confidence:</div>',
  },
  trusteesItem_4: {
    ru: 'Издание и переиздание книг; <br> Руководство и управление всей деятельностью по публикации и распространению моих книг; <br> Процессинг всех авторских и законных прав на мои книги; <br> Распределение финансовых средств по усмотрению Попечителей для нужд "ИСККОН-Пресс" и для обеспечения деятельности "ИСККОН-Пресс", связанной с изданием и переизданием указанных книг.',
    en: "Printing and reprinting of books; <br> Directing and managing all publicity and distribution of my books; <br> Processing all copyrights and legal rights to my books; <br> Allocating funds as they see fit to ISKCON Press and directing the operation of the activities of ISKCON Press in the printing and reprinting of said books.",
  },
  trusteesItem_5: {
    ru: "Финансовые средства направленные в Фонд Недвижимого Имущества используются по единоличному усмотрению Попечителей для следующих целей:",
    en: "Those funds allocated to the Building fund shall be applied in the sole discretion of the Trustees in the following manner:",
  },
  trusteesItem_6: {
    ru: "Покупка недвижимости для строительства новых храмов или ремонт старых храмов.",
    en: "Purchase of properties for the construction of new temples or renovation of old temples.",
  },
  trusteesItem_7: {
    ru: 'Я даю указания Попечителям, чтобы они, используя вышеуказанные финансовые поступления, распределяли доходы Траста, полученные за каждый финансовый год, в такие сроки и таким образом, чтобы активы фонда не становились объектом налогообложения на нераспределённый доход в соответствии с Налоговым кодексом США. Кроме того, я даю указания Попечителям по своему усмотрению размещать такие доли основной доли доходов фонда на цели, указанные в настоящем разделе IV. <div style="text-indent:11px;">Любые средства, которые не были размещены вышеупомянутым образом, по усмотрению Попечителей могут быть переданы другим благотворительным или религиозным организацмям или на цели не облагаемые налогом, в соответствии с Налоговым кодексом США.</div>',
    en: 'In the application of said proceeds, I direct the Trustees to distribute the Trust income for each taxable year at such time and in such manner as not to become subject to the tax on undistributed income imposed by the Internal Revenue Code. In addition, in the discretion of the Trustees, I direct them to allocate such portions of the principal portion of the proceeds of said Trust for the purposes stated in this Paragraph IV. <div style="text-indent:11px;">Any funds not so allocated may be distributed in the sole discretion of the Trustees to other charitable or religious organizations or purposes which qualify as tax-exempt under the provisions of the Internal Revenue Code.</div>',
  },
  trusteesItem_8: {
    ru: "A. Инвестировать любые денежные средства Трастового Фонда управления, не использованные для вышеперечисленных целей. <br> B. Открывать банковские счета на имя Траста для бизнес транзакций. <br> C. Оплачивать такие административные доходы, которые могут потребоваться в администрировании Настоящего Траста. <br> D. Назначать секретаря, который будет вести бухгалтерию и составлять ежемесячные отчёты Попечителям.",
    en: "A. To invest any of the principal of the Trust Fund not used for the purposes hereinabove stated; <br> B. To open bank accounts in the name of the Trust for the transaction of business; <br> C. To pay such administrative expense as may be necessary in the administration of this Trust; <br> D. To appoint a secretary to keep account books and issue a monthly statement to the Trustees.",
  },
  beneficiaryTitle: {
    ru: `Бенефициар`,
    en: `Beneficiary`,
  },
  beneficiaryItem_1: {
    ru: "ИСККОН (Религиозная корпорация, Международное общество сознанеия Кришны),  зарегестрированный в Нью-Йорке в 1966 году, юридически, является единственным бенефициаром прописанным в Трастовом договоре.",
    en: "ISKCON (Religious Corporation, International Society for Krishna Consciousness), registered in New York in 1966, is legally the sole beneficiary of the Trust agreement.",
  },
  beneficiaryItem_2: {
    ru: `Единственный беницициаром прописанном в трастовом договоре является юридическое лицо Религиозная корпорация (religion incorporation) Международное общество сознанеия кришны`,
    en: `The sole beneficiary of the Trust agreement is the legal entity Religion Incorporation \tInternational Society for Krishna Consciousness`,
  },
  documentsTitle: {
    ru: `Юридические документы`,
    en: `Legal documents`,
  },
  documentsItem_1: {
    ru: "Принятие Траста",
    en: "Acceptance of Trust",
  },
  documentsItem_2: {
    ru: `Трастовый договор`,
    en: `Trust agreement`,
  },
  documentsItem_3: {
    ru: "Устав ИСККОН",
    en: "Cetrificate of Incorporation ISKCON",
  },
  documentsItem_4: {
    ru: "Клятва руководителей храма",
    en: "Oath by temple leaders",
  },
  documentsItem_5: {
    ru: "Ложная организация выставляющая себя за ИСККОН - Религиозное Общество ДжиБиСи западная Бенгалия, зарегистрированная в 1993 году.",
    en: "A false organization posing as ISKCON is the GBC Religious Society of West Bengal, registered in 1993.",
  },
  documentsItem_6: {
    ru: "Международная встреча ББТ 1986 г.<br> (встреча ложных Попечителей)",
    en: "International BBT meting 1986<br> (meeting of false Trustees)",
  },
  documentsItem_7: {
    ru: "Подтверждающее письмо, о том что Траст не передавал свои активы!",
    en: "Confirmation, which stating, that Trust assets have never been transferred to any 3rd Party (like Corporation BBT International)",
  },
  documentsItem_8: {
    ru: "Принятие Траста (Хансадутта дас и Абхиманью дас)",
    en: "Acceptance of Trust (Hansadutta das and Abhimanyu das)",
  },
  documentsItem_9: {
    ru: "Письмо о назначении Абхиманью даса",
    en: "Letter of Appointment to Abhimanyu das",
  },
  documentsItem_10: {
    ru: "Резолюция ББТ 20190724-01 (о назначении Абхиманью даса)",
    en: "BBT Resolution 20190724-01 (on the appointment of Abhimanyu das)",
  },
  documentsItem_11: {
    ru: "Резолюция ББТ 20190724-02 (задачи для Попечителя)",
    en: "BBT Resolution 20190724-02 (Tasks for the Trustee)",
  },
  documentsItem_12: {
    ru: "Резолюция ББТ 20191030-01 (анулированный Попечитель)",
    en: "BBT Resolution 20191030-01 (cancelled Trustee)",
  },
  documentsItem_13: {
    ru: "Резолюция ББТ 19740915-01 (о назначении Хансадутты даса)",
    en: "BBT Resolution 19740915-01 (on the appointment of Hansadutta das)",
  },
  documentsItem_14: {
    ru: "Закон Калифорнии о наследстенном праве. (9 раздел Трасты)",
    en: "California probate law. (Division 9. Trust law)",
  },
  documentsItem_15: {
    ru: "Поправки к официальным документам",
    en: "Amendments for official documents",
  },
  documentsItem_16: {
    ru: "Указания по руководству ИСККОН",
    en: "Direction of management ISKCON",
  },
  annoncmentPopup_1: {
    ru: "Требуется специалист по международному уголовному праву",
    en: "Specialist in international criminal law is required",
  },
  annoncmentPopup_2: {
    ru: "Бхактиведанта Бук Траст возобновил свою работу",
    en: "Bhaktivedanta Book Trust reopened",
  },
  documentsButton: {
    ru: `Перейти`,
    en: `View`,
  },
  annoncmentTitle: {
    ru: `Заявления и объявления`,
    en: `Announcement and Advertisement`,
  },
  annoncmentButton: {
    ru: `Отправить`,
    en: `FEEDBACK`,
  },
  feedbackForm_Name: {
    ru: `Имя`,
    en: `Name`,
  },
  feedbackForm_Contact: {
    ru: `Контакт обратной связи`,
    en: `Feedback contact`,
  },
  feedbackForm_Message: {
    ru: `Сообщение`,
    en: `Message`,
  },
  feedbackForm_ThankYou: {
    ru: `Спасибо!`,
    en: `Thank you!`,
  },
  assetsTitle: {
    ru: `Активы Траста`,
    en: `Trust assets`,
  },
  assetsDescription: {
    ru: `Объект защиты авторских прав`,
    en: `Object of copyright protection`,
  },

  assetsItem_0: {
    ru: "Книги и журналы:",
    en: "Books and magazines:",
  },
  assetsItem_1: {
    ru: `
		<a href="Bhagavad-gita_As_It_Is.html" data-id="1">Бхагавад-гӣта̄ Как Она Есть</a> <br>
		<a href="Srimad-Bhagavatam.html" data-id="2">Ш́рӣмад-Бха̄гаватам</a> <br>
		<a href="Sri_Caitanya-caritamrita.html" data-id="3">Ш́рӣ Чайтанья-чарита̄мр̣ита</a> <br>
		<a href="#" data-id="99">Журнал «Назад к Богу»</a> <br>
		<a href="KRSNA_The_Supreme_Personality_of_Godhead.html" data-id="4">КР̣ШН̣А, Высочайшая Персональность Бога</a> <br>
		<a href="Teachings_of_Lord_Caitanya.html" data-id="5">Учения Господа Чайтаньи</a> <br>
		<a href="The_Nectar_of_Devotion.html" data-id="6">Нектар Преданности</a> <br>
		<a href="Sri_Isopanisad.html" data-id="7">Ш́рӣ Ӣш́опанишад</a> <br>
		<a href="Easy_Journey_to_Other_Planets.html" data-id="8">Лёгкое Путешествие к Другим Планетам</a> <br>
		<a href="KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.html" data-id="9">СОЗНАНИЕ КР̣ШН̣Ы:  Высшая Система Йоги</a> <br>
		<a href="Beyond_Birth_and_Death.html" data-id="10">За гранью Рождения и Смерти</a> <br>
		<a href="The_Perfection_of_Yoga.html" data-id="11">Совершенство Йоги</a> <br>
		<a href="The_Nectar_of_Instruction.html" data-id="12">Нектар Наставлений</a> <br>
		<a href="Teachings_of_Lord_Kapila.html" data-id="13">Учения Господа Капилы</a> <br>
		<a href="Krsna_Consciousness_THE_MATCHLESS_GIFT.html" data-id="14">Сознание Кр̣шн̣ы, НЕПРЕВЗОЙДЕННЫЙ ДАР</a> <br>
		<a href="On_the_Way_to_KRSNA.html" data-id="15">На Пути к КР̣ШН̣Е <br>
		<a href="TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.html" data-id="16">ТРАНСЦЕНДЕНТАЛЬНОЕ Учение Прахлады Махараджа</a> <br>
		<a href="Lord_Caitanya_in_Five_Features.html" data-id="17">Господь Чайтанья в пяти ипостасях</a> <br>
		<a href="RAJA-VIDYA_The_King_of_Knowledge.html" data-id="18">РА̄ДЖА-ВИДЬЯ̄ ЦАРЬ ЗНАНИЯ</a> <br>
		<a href="Elevation_to_Krsna_Consciousness.html" data-id="19">Возвышение к Сознанию Кр̣шн̣ы</a> <br>
		<a href="#" data-id="20">КР̣ШН̣А, Резервуар Наслаждения</a> 
		`,
    en: `
		<a href="Bhagavad-gita_As_It_Is.html" data-id="1">Bhagavad-gītā As It Is</a> <br>
		<a href="Srimad-Bhagavatam.html" data-id="2">Śrīmad-Bhāgavatam</a> <br>
		<a href="Sri_Caitanya-caritamrita.html" data-id="3">Śrī Caitanya-caritāmṛita</a> <br>
		<a href="#" data-id="99">Back to Godhead Magazine</a> <br>
		<a href="KRSNA_The_Supreme_Personality_of_Godhead.html" data-id="4">KṚṢṆA: The Supreme Personality of Godhead</a> <br>
		<a href="Teachings_of_Lord_Caitanya.html" data-id="5">Teachings of Lord Caitanya</a> <br>
		<a href="The_Nectar_of_Devotion.html" data-id="6">The Nectar of Devotion</a> <br>
		<a href="Sri_Isopanisad.html" data-id="7">Śrī Īśopanisad</a> <br>
		<a href="Easy_Journey_to_Other_Planets.html" data-id="8">Easy Journey to Other Planets</a> <br>
		<a href="KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.html" data-id="9">KṚṢṆA CONSCIOUSNESS: The Topmost Yoga System</a> <br>
		<a href="Beyond_Birth_and_Death.html" data-id="10">Beyond Birth and Death</a> <br>
		<a href="The_Perfection_of_Yoga.html" data-id="11">The Perfection of Yoga</a> <br>
		<a href="The_Nectar_of_Instruction.html" data-id="12">The Nectar of Instruction</a> <br>
		<a href="Teachings_of_Lord_Kapila.html" data-id="13">Teachings of Lord Kapila</a> <br>
		<a href="Krsna_Consciousness_THE_MATCHLESS_GIFT.html" data-id="14">Kṛṣṇa Consciousness, THE MATCHLESS GIFT</a> <br>
		<a href="On_the_Way_to_KRSNA.html" data-id="15">On the Way to KṚṢṆA</a> <br>
		<a href="TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.html" data-id="16">TRANSCENDENTAL Teachings Of Prahlad Maharaj</a> <br>
		<a href="Lord_Caitanya_in_Five_Features.html" data-id="17">Lord Caitanya in five features</a> <br>
		<a href="RAJA-VIDYA_The_King_of_Knowledge.html" data-id="18">RĀJA-VIDYĀ The KING OF KNOWLEDGE</a> <br>
		<a href="Elevation_to_Krsna_Consciousness.html" data-id="19">Elevation to Kṛṣṇa Consciousness</a> <br>
		<a href="#" data-id="20">KṚṢṆA the Reservoir of Pleasure</a>
		`,
  },
  assetsItem_2: {
    ru: "Логотип зарегестрированный в 1975 году патентным бюро США",
    en: "Logo registered in 1975 by the US Patent Office.",
  },
  assetsButton: {
    ru: `Посмотреть книги`,
    en: `View Books`,
  },
  bookCollapse: {
    ru: `закрыть`,
    en: `collapse see details`,
  },
  bookAboutEditionTitle: {
    ru: `Об этом издании`,
    en: `About this edition`,
  },

  bookAboutPrintingTitle: {
    ru: `Особенности этого тиража`,
    en: `Features of this printing`,
  },

  "coverNeeded-title": {
    en: `Cover required!`,
    ru: `Требуется обложка!`,
  },
  "coverNeeded-content": {
    en: `If you have a better cover for this book, please contact us via the feedback form at <a href="announcement.html">https://bhaktivedanta-book-trust.com/announcement.html</a>`,
    ru: `Если у вас есть более качественная обложка этой книги, напишите нам в форме обратной связи на странице <a href="announcement.html">https://bhaktivedanta-book-trust.com/announcement.html</a>`,
  },

  //для Страниц с книгами в попапах
  "bookLine-1": {
    ru: "Издание",
    en: "Edition",
  },
  "bookLine-2": {
    en: "Pub. date",
    ru: "Дата публикации",
  },

  "bookLine-3": {
    ru: "Язык",
    en: "Language",
  },
  "bookLine-4": {
    ru: "1й Тираж",
    en: "1st Printing",
  },
  "bookLine-5": {
    en: "Printed by",
    ru: "Типография",
  },
  "bookLine-6": {
    en: "Pages",
    ru: "Страницы",
  },
  "bookLine-7": {
    en: "Size",
    ru: "Размер",
  },
  "bookLine-8": {
    en: "lccn",
    ru: "lccn",
  },
  "bookLine-9": {
    en: "Reg. №",
    ru: "Рег. №",
  },
  "bookLine-10": {
    en: "Translated into",
    ru: "Переведена на",
  },
  "bookLine-10_popup": {
    en: "Original language",
    ru: "Язык оригинала",
  },

  //***START_AUTOGENERATE_LANGUAGE***
  "Beyond_Birth_and_Death.1stEd.1972.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Beyond_Birth_and_Death.1stEd.1972.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Beyond_Birth_and_Death.1stEd.1972.En.1st_Printing.paperback-tableCopies": {
    en: "25000 copies",
    ru: "25000 копий",
  },
  "Beyond_Birth_and_Death.1stEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Beyond_Birth_and_Death.1stEd.1972.En.3rd_Printing.paperback-tableCopies": {
    en: "200000 copies",
    ru: "200000 копий",
  },
  "Beyond_Birth_and_Death.1stEd.1972.En.3rd_Printing.paperback-tableNprinting":
    {
      en: "Third Printing",
      ru: "Третий Тираж",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-bookDescr": {
    en: '<span style="font-size:120%; font-family:Optima; font-weight:400">Abridged Edition</span>',
    ru: '<span style="font-size:120%; font-family:Optima; font-weight:400">Сокращенное Издание</span>',
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-editionText": {
    en: 'THE BHAGAVAD GITA is also known as The Geetopanishad. It is the essence of Vedic knowledge and one of the most important Upanishads in Vedic literature.<br> There are many commentaries on The Bhagavad Gita, and the necessity for another should be explained on the following basis: an American lady asked me to recommend an English edition of The Bhagavad Gita which she could read. I was unable to do so in good conscience. Of course, there are many translations, but of those I have seen–not only in America, but also in India–none can be said to be authoritative, because in almost every one of them the author bas expressed his personal opinion through the commentaries, without touching the spirit of The Bhagavad Gita as it is.<br> The spirit of The Bhagavad Gita is mentioned in The Gita Itself. It is like this: if we want to take a particular medicine, then we have to follow the directions written on the label of the bottle. We cannot take the medicine according to our own directions, or the directions of a friend not in knowledge of this medicine. We must follow the directions on the label or the directions of our physician. The Bhagavad Gita also should be accepted as it is directed by the Speaker Himself. The Speaker is Lord Sri Krishna. He is mentioned on every page as the Supreme Personality of Godhead, or «Bhagavan.» Bhagavan sometimes means any powerful person or demigod, but here it means Krishna. This is confirmed by all the great teachers, including Shankara and Sri Chaitanya Mahaprabhu. In India there are many authorities on Vedic knowledge, and they have virtually all accepted Sri Krishna as the Supreme Personality of Godhead. We should therefore accept The Bhagavad Gita as it is directed by the Supreme Personality of Godhead Himself. <br> <p style="margin-right:60px"; align="right">(<i>Bhagavad-gītā As It Is</i> 1968. Introduction)</p>',
    ru: '<i>Бхагавад-гūтā</i> также известна как <i>Гитопанишад.</i> Это суть Ведического знания и одна из самых важных Упанишад в Ведической литературе.<br> На <i>Бхагавад-гиту</i> есть много комментариев, и необходимость еще одного следует объяснять следующим образом: одна американка попросила меня порекомендовать английское издание <i>Бхагавад-гиты,</i> которое она могла бы прочитать. Я был не в состоянии сделать это с чистой совестью. Переводов, конечно, много, но из тех, что я видел не только в Америке, но и в Индии, один можно назвать авторитетным, так как почти в каждом из них автор через комментарии выражал свое личное мнение, не касаясь духа <i>Бхагавад-гиты</i>, каков он есть.<br> Дух <i>Бхагавад-гиты</i> упоминается в Самой <i>Гите</i>. Это примерно так: если мы хотим принять то или иное лекарство, то должны следовать указаниям, написанным на этикетке флакона. Мы не можем принимать лекарство согласно нашим собственным указаниям или указаниям друга, не знакомого с этим лекарством. Мы должны следовать указаниям на этикетке или указаниям нашего врача. <i>Бхагавад-гиту</i> также следует принимать такой, какой она указана Самим Говорящим. Говорит Господь Шри Кришна. На каждой странице он упоминается как Величайшая Личность Бога, или <i>«Бхагаван»</i>. Бхагаван иногда означает любого могущественного человека или полубога, но здесь это означает Кришну. Это подтверждают все великие учителя, включая Шанкару и Шри Чайтанью Махапрабху. В Индии есть много авторитетов в области ведического знания, и практически все они признают Шри Кришну, Вилечайшую Личность Бога. Поэтому мы должны принимать <i>Бхагавад-гиту</i> так, как она указана Самим Величайшей Личностью Бога.<br> <p style="margin-right:60px"; align="right">(<i>Бхагавад-гūтā Как Она Есть</i> 1968. Введение)</p>',
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-lineLanguage": {
    en: "English",
    ru: "Английский",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-linePages": {
    en: "318p.",
    ru: "318 страниц",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-linePrinting": {
    en: "1968: X00000 copies, hardcover",
    ru: "1968: X00000 копий, твёрдый пер.",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-linePubDate": {
    en: "25Nov68",
    ru: "25Ноя68",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-lineSize": {
    en: "6.4x9.3 inch",
    ru: "162x236 мм",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-tableBookProperties":
    {
      en: "hardcover, 6.4x9.3 inch",
      ru: "твёрдый пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.paperback-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.paperback-tableBookProperties":
    {
      en: "paperback, 6.4x9.3 inch",
      ru: "мягкий пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Bhagavad-gita_As_It_Is.1stEd.1968.En.1st_Printing.paperback-tableTypography":
    {
      en: "The Macmillan Company, New York, USA",
      ru: "Компания Macmillan, Нью-Йорк, США",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-bookDescr": {
    en: '<span style="font-size:120%; font-family:Optima; font-weight:400">The Definitive<br> English Edition</span>',
    ru: '<span style="font-size:120%; font-family:Optima; font-weight:400">Заключительное<br> Английское Издание</span>',
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-bookNameImage": {
    en: "img/titles/Bhagavad-gita_As_It_Is/Bhagavad-gita_As_It_Is.2ndEd.1972/Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover/book_name_en.svg",
    ru: "img/titles/Bhagavad-gita_As_It_Is/Bhagavad-gita_As_It_Is.2ndEd.1972/Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover/book_name_ru.svg",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-editionText": {
    en: 'Originally I wrote <i>Bhagavad-gītā As It Is</i> in the form in which it is presented now. When this book was first published, the original manuscript was, unfortunately, cut short to less than 400 pages, without illustrations and without explanations for most of the original verses of the <i>Śrīmad Bhagavad-gītā.</i> In all of my other books–<i>Śrīmad Bhāgavatam, Śrī Īśopaniṣad,</i> etc.–the system is that I give the original verse, its English transliteration, word-for-word Sanskrit-English equivalents, translations and purports. This makes the book very authentic and scholarly and makes the meaning self-evident. I was not very happy, therefore, when I had to minimize my original manuscript. But later on, when the demand for <i>Bhagavad-gītā As It Is</i> considerably increased, I was requested by many scholars and devotees to present the book in its original form, and Messrs. Macmillan and Co. agreed to publish the complete edition. Thus the present attempt is to offer the original manuscript of this great book of knowledge with full <i>paramparā</i> explanation in order to establish the Kṛṣṇa consciousness movement more soundly and progressively.<br> <p style="margin-right:60px"; align="right">(<i>Bhagavad-gītā As It Is</i> 1972. Preface)</p>',
    ru: 'Первоначально я написал <i>Бхагавад-гиту Как Она Есть</i> именно в той форме, в которой я представляю её сейчас. Когда эта книга была опубликована впервые, оригинальную рукопись, к сожалению, пришлось сократить до менее чем 400 страниц, без иллюстраций и разъяснений к большинству из оригинальных стихов <i>Шримад Бхагавад-гиты.</i> Во всех своих остальных книгах – <i>Шримад-Бхагаватам, Шри Ишопанишад</i> и др., я придерживаюсь следующей системы: даётся оригинальный стих, его английская транслитерация, пословные санскритско-английские эквиваленты, переводы и разъяснения смыслов. Это делает книгу весьма аутентичной и научной, а её смысл – самоочевидным. Я был не очень рад, поэтому, когда мне пришлось минимизировать свою оригинальную рукопись. Но позднее, когда запрос на <i>Бхагавад-гиту Как Она Есть</i> значительно возрос, многие учёные и приверженные последователи просили меня презентовать книгу в её изначальной форме, и господа Макмиллан и Ко. дали своё согласие опубликовать её полное издание. Таким образом, настоящая попытка издать данную книгу является представлением оригинальной рукописи этой великой книги знания с полными разъяснениями <i>парампары,</i> в целях сделать движение сознания Кришны более устойчивым и прогрессивным.<br> <p style="margin-right:60px"; align="right">(<i>Бхагавад-гūтā Как Она Есть</i> 1972. Предисловие)</p>',
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-lineLanguage": {
    en: "English",
    ru: "Английский",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-linePages": {
    en: "xvi, 981p., 48 pic.",
    ru: "xvi, 981 стр., 48 картин",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-linePrinting": {
    en: "1972: X00000 copies, hardcover",
    ru: "1972: X00000 копий, твёрдый пер.",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-linePubDate": {
    en: "14Aug72",
    ru: "14Авг72",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-lineSize": {
    en: "6x9 inch",
    ru: "162x236 мм",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-printingText": {
    en: "This book is identical to the 1st printing",
    ru: "Данная книга идентичена 1 тиражу 2го издания",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-tableBookProperties":
    {
      en: "hardcover, 6x9 inch",
      ru: "твёрдый пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.paperback-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.paperback-tableBookProperties":
    {
      en: "paperback, 6x9 inch",
      ru: "мягкий пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.2nd_Printing.paperback-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.2nd_Printing.paperback-tableBookProperties":
    {
      en: "paperback, 6x9 inch",
      ru: "мягкий пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.2nd_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.3rd_Printing.paperback-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.3rd_Printing.paperback-tableBookProperties":
    {
      en: "paperback, 6x9 inch",
      ru: "мягкий пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.3rd_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.3rd_Printing.paperback-tableNprinting":
    {
      en: "Third Printing",
      ru: "Третий Тираж",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.5th_Printing.paperback-lineOriginalLanguage":
    {
      en: "English",
      ru: "Английский",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.5th_Printing.paperback-tableBookProperties":
    {
      en: "paperback, 6x9 inch",
      ru: "мягкий пер., 162x236 мм",
    },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.5th_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "Bhagavad-gita_As_It_Is.2ndEd.1972.En.5th_Printing.paperback-tableNprinting":
    {
      en: "Fifth Printing",
      ru: "Пятый Тираж",
    },
  "Easy_Journey_to_Other_Planets.1stEd.1960.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Easy_Journey_to_Other_Planets.1stEd.1960.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Easy_Journey_to_Other_Planets.1stEd.1960.En.1st_Printing.paperback-tableCopies":
    {
      en: "X0000 copies",
      ru: "X0000 копий",
    },
  "Easy_Journey_to_Other_Planets.1stEd.1960.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Easy_Journey_to_Other_Planets.2ndEd.1970.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Easy_Journey_to_Other_Planets.2ndEd.1970.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Easy_Journey_to_Other_Planets.2ndEd.1970.En.1st_Printing.paperback-tableCopies":
    {
      en: "5000 copies",
      ru: "5000 копий",
    },
  "Easy_Journey_to_Other_Planets.2ndEd.1970.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.1st_Printing.paperback-tableCopies":
    {
      en: "10000* copies",
      ru: "10000* копий",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.2nd_Printing.paperback-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.3rd_Printing.paperback-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "Easy_Journey_to_Other_Planets.3rdEd.1972.En.3rd_Printing.paperback-tableNprinting":
    {
      en: "Third Printing",
      ru: "Третий Тираж",
    },
  "Elevation_to_Krsna_Consciousness.1stEd.1973.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Elevation_to_Krsna_Consciousness.1stEd.1973.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Elevation_to_Krsna_Consciousness.1stEd.1973.En.1st_Printing.paperback-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "Elevation_to_Krsna_Consciousness.1stEd.1973.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.3rd_Printing.paperback-infoTableNprinting":
    {
      en: "3rd Printing",
      ru: "3й Тираж",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.3rd_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.3rd_Printing.paperback-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.3rd_Printing.paperback-tableNprinting":
    {
      en: "Third Printing",
      ru: "Третий Тираж",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.4th_Printing.paperback-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.1stEd.1970.En.4th_Printing.paperback-tableNprinting":
    {
      en: "Fourth Printing",
      ru: "Четвёртый Тираж",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.2ndEd.1972.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.2ndEd.1972.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.2ndEd.1972.En.1st_Printing.paperback-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System.2ndEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.1st_Printing.hardcover-tableCopies":
    {
      en: "30000 copies",
      ru: "30000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.2nd_Printing.hardcover-tableCopies":
    {
      en: "10000 copies",
      ru: "10000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.2nd_Printing.hardcover-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.7th_Printing.hardcover-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1.1stEd.1970.En.7th_Printing.hardcover-tableNprinting":
    {
      en: "Seventh Printing",
      ru: "Седьмой Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.10th_Printing.paperback-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.10th_Printing.paperback-tableNprinting":
    {
      en: "Tenth Printing",
      ru: "Десятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-editionText":
    {
      en: "The 3-volume edition of <i>KṚṢṆA, the Supreme Personality of Godhead,</i> is not registered with the copyright office.",
      ru: "Издание книги <i>“KṚṢṆA, The Supreme Personality of Godhead” </i>разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-infoTableNprinting":
    {
      en: "5th Printing",
      ru: "5й Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-printingText":
    {
      en: "5th Printing<br>The 3-volume edition of “KṚṢṆA, The Supreme Personality of Godhead” is not registered with the copyright office.",
      ru: "5й Тираж<br>Издание книги “KṚṢṆA, The Supreme Personality of Godhead” разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-tableCopies":
    {
      en: "150000 copies",
      ru: "150000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.5th_Printing.paperback-tableNprinting":
    {
      en: "Fifth Printing",
      ru: "Пятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.9th_Printing.hardcover-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol1_of_3.1stEd.1970.En.9th_Printing.hardcover-tableNprinting":
    {
      en: "Nineth Printing",
      ru: "Девятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.1st_Printing.hardcover-tableCopies":
    {
      en: "30000 copies",
      ru: "30000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.3rd_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.3rd_Printing.hardcover-tableNprinting":
    {
      en: "Third Printing",
      ru: "Третий Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.7th_Printing.hardcover-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2.1stEd.1970.En.7th_Printing.hardcover-tableNprinting":
    {
      en: "Seventh Printing",
      ru: "Седьмой Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.10th_Printing.paperback-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.10th_Printing.paperback-tableNprinting":
    {
      en: "Tenth Printing",
      ru: "Десятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-editionText":
    {
      en: "The 3-volume edition of <i>KṚṢṆA, the Supreme Personality of Godhead,</i> is not registered with the copyright office.",
      ru: "Издание книги <i>“KṚṢṆA, The Supreme Personality of Godhead” </i>разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-infoTableNprinting":
    {
      en: "9th Printing",
      ru: "9й Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-printingText":
    {
      en: "9th Printing<br>The 3-volume edition of “KṚṢṆA, The Supreme Personality of Godhead” is not registered with the copyright office.",
      ru: "9й Тираж<br>Издание книги “KṚṢṆA, The Supreme Personality of Godhead” разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol2_of_3.1stEd.1970.En.9th_Printing.hardcover-tableNprinting":
    {
      en: "Nineth Printing",
      ru: "Девятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-editionText":
    {
      en: "The 3-volume edition of <i>KṚṢṆA, the Supreme Personality of Godhead,</i> is not registered with the copyright office.",
      ru: "Издание книги <i>“KṚṢṆA, The Supreme Personality of Godhead” </i>разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-infoTableNprinting":
    {
      en: "5th Printing",
      ru: "5й Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-printingText":
    {
      en: "5th Printing<br>The 3-volume edition of “KṚṢṆA, The Supreme Personality of Godhead” is not registered with the copyright office.",
      ru: "5й Тираж<br>Издание книги “KṚṢṆA, The Supreme Personality of Godhead” разбитое на 3 тома не имеет регистрации в офисе авторских прав.",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-tableCopies":
    {
      en: "150000 copies",
      ru: "150000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.5th_Printing.paperback-tableNprinting":
    {
      en: "Fifth Printing",
      ru: "Пятый Тираж",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.9th_Printing.hardcover-tableCopies":
    {
      en: "300000 copies",
      ru: "300000 копий",
    },
  "KRSNA_The_Supreme_Personality_of_Godhead.Vol3_of_3.1stEd.1970.En.9th_Printing.hardcover-tableNprinting":
    {
      en: "Nineth Printing",
      ru: "Девятый Тираж",
    },
  "Krsna_Consciousness_THE_MATCHLESS_GIFT.1stEd.1974.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Krsna_Consciousness_THE_MATCHLESS_GIFT.1stEd.1974.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Krsna_Consciousness_THE_MATCHLESS_GIFT.1stEd.1974.En.1st_Printing.paperback-tableCopies":
    {
      en: "25000 copies",
      ru: "25000 копий",
    },
  "Krsna_Consciousness_THE_MATCHLESS_GIFT.1stEd.1974.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.1st_Printing.paperback-tableCopies":
    {
      en: "25000 copies",
      ru: "25000 копий",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.2nd_Printing.paperback-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "Lord_Caitanya_in_Five_Features.1stEd.1973.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "On_the_Way_to_KRSNA.1stEd.1973.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "On_the_Way_to_KRSNA.1stEd.1973.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "On_the_Way_to_KRSNA.1stEd.1973.En.1st_Printing.paperback-tableCopies": {
    en: "100000 copies",
    ru: "100000 копий",
  },
  "On_the_Way_to_KRSNA.1stEd.1973.En.1st_Printing.paperback-tableNprinting": {
    en: "First Printing",
    ru: "Первый Тираж",
  },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.1st_Printing.paperback-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.2nd_Printing.paperback-tableCopies":
    {
      en: "160000 copies",
      ru: "160000 копий",
    },
  "RAJA-VIDYA_The_King_of_Knowledge.1stEd.1973.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.2nd_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol1.1stEd.1974.En.2nd_Printing.hardcover-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.2nd_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol2.1stEd.1974.En.2nd_Printing.hardcover-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol3.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol3.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol3.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Sri_Caitanya-caritamrita.Adi-lila_Vol3.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Antya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol1.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol2.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol3.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol4.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol5.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol6.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol6.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol6.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol6.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol7.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol7.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol7.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol7.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol8.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol8.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol8.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol8.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol9.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol9.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol9.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Sri_Caitanya-caritamrita.Madhya-lila_Vol9.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Sri_Isopanisad.1stEd.1969.En.1st_Printing.paperback-infoTableNprinting": {
    en: "1st Printing",
    ru: "1й Тираж",
  },
  "Sri_Isopanisad.1stEd.1969.En.1st_Printing.paperback-lineTranslatedInto": {
    en: "No authorized translations.",
    ru: "Нет авторизованных переводов.",
  },
  "Sri_Isopanisad.1stEd.1969.En.1st_Printing.paperback-tableCopies": {
    en: "X0000 copies",
    ru: "X0000 копий",
  },
  "Sri_Isopanisad.1stEd.1969.En.1st_Printing.paperback-tableNprinting": {
    en: "First Printing",
    ru: "Первый Тираж",
  },
  "Sri_Isopanisad.1stEd.1969.En.5th_Printing.paperback-tableCopies": {
    en: "X0000 copies",
    ru: "X0000 копий",
  },
  "Sri_Isopanisad.1stEd.1969.En.5th_Printing.paperback-tableNprinting": {
    en: "Fifth Printing",
    ru: "Пятый Тираж",
  },
  "Sri_Isopanisad.2ndEd.1972.En.7th_Printing.paperback-editionText": {
    en: "This edition of the book is not registered with the copyright office",
    ru: "Издание этой книги не зарегестрировано в офисе авторских прав",
  },
  "Sri_Isopanisad.2ndEd.1972.En.7th_Printing.paperback-infoTableNprinting": {
    en: "7th Printing",
    ru: "7й Тираж",
  },
  "Sri_Isopanisad.2ndEd.1972.En.7th_Printing.paperback-lineTranslatedInto": {
    en: "No authorized translations.",
    ru: "Нет авторизованных переводов.",
  },
  "Sri_Isopanisad.2ndEd.1972.En.7th_Printing.paperback-tableCopies": {
    en: "300000 copies",
    ru: "300000 копий",
  },
  "Sri_Isopanisad.2ndEd.1972.En.7th_Printing.paperback-tableNprinting": {
    en: "Seventh Printing",
    ru: "Седьмой Тираж",
  },
  "Sri_Isopanisad.2ndEd.1972.En.9th_Printing.paperback-tableCopies": {
    en: "50000 copies",
    ru: "50000 копий",
  },
  "Sri_Isopanisad.2ndEd.1972.En.9th_Printing.paperback-tableNprinting": {
    en: "Nineth Printing",
    ru: "Девятый Тираж",
  },
  "Srimad-Bhagavatam.10thCanto_Pt1chap1-5.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.10thCanto_Pt1chap1-5.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.10thCanto_Pt1chap1-5.1stEd.1977.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.10thCanto_Pt1chap1-5.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.10thCanto_Pt2chap6-12.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.10thCanto_Pt2chap6-12.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.10thCanto_Pt2chap6-12.1stEd.1977.En.1st_Printing.hardcover-tableCopies":
    {
      en: "50000 copies",
      ru: "50000 копий",
    },
  "Srimad-Bhagavatam.10thCanto_Pt2chap6-12.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.10thCanto_Pt3chap13.1stEd.1980.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.10thCanto_Pt3chap13.1stEd.1980.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.10thCanto_Pt3chap13.1stEd.1980.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.10thCanto_Pt3chap13.1stEd.1980.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.1stEd.1962.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.1stEd.1962.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.1stEd.1962.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.1stEd.1962.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.2ndEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.2ndEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.2ndEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt1chap1-7.2ndEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.1stEd.1964.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.1stEd.1964.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.1stEd.1964.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.1stEd.1964.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.2ndEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.2ndEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.2ndEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt2chap8-12.2ndEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.1stEd.1965.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.1stEd.1965.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.1stEd.1965.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.1stEd.1965.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.2ndEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.2ndEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.2ndEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "10000 copies",
      ru: "10000 копий",
    },
  "Srimad-Bhagavatam.1stCanto_Pt3chap13-19.2ndEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.2nd_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt1chap1-6.1stEd.1972.En.2nd_Printing.hardcover-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt2chap7-10.1stEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt2chap7-10.1stEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt2chap7-10.1stEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.2ndCanto_Pt2chap7-10.1stEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt1chap1-8.1stEd.1972.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt1chap1-8.1stEd.1972.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt1chap1-8.1stEd.1972.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt1chap1-8.1stEd.1972.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt2chap9-16.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt2chap9-16.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt2chap9-16.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt2chap9-16.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt3chap17-24.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt3chap17-24.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt3chap17-24.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt3chap17-24.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt4chap25-33.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt4chap25-33.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt4chap25-33.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.3rdCanto_Pt4chap25-33.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt1chap1-8.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt1chap1-8.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.4thCanto_Pt1chap1-8.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.4thCanto_Pt1chap1-8.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt2chap9-19.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt2chap9-19.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.4thCanto_Pt2chap9-19.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.4thCanto_Pt2chap9-19.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt3chap20-24.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt3chap20-24.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.4thCanto_Pt3chap20-24.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.4thCanto_Pt3chap20-24.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt4chap25-31.1stEd.1974.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.4thCanto_Pt4chap25-31.1stEd.1974.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.4thCanto_Pt4chap25-31.1stEd.1974.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X00000 copies",
      ru: "X00000 копий",
    },
  "Srimad-Bhagavatam.4thCanto_Pt4chap25-31.1stEd.1974.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.5thCanto_Pt1chap1-13.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.5thCanto_Pt1chap1-13.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.5thCanto_Pt1chap1-13.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.5thCanto_Pt1chap1-13.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.5thCanto_Pt2chap14-26.1stEd.1975.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.5thCanto_Pt2chap14-26.1stEd.1975.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.5thCanto_Pt2chap14-26.1stEd.1975.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.5thCanto_Pt2chap14-26.1stEd.1975.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.6thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.6thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt2chap6-13.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt2chap6-13.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.6thCanto_Pt2chap6-13.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.6thCanto_Pt2chap6-13.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt3chap14-19.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.6thCanto_Pt3chap14-19.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.6thCanto_Pt3chap14-19.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.6thCanto_Pt3chap14-19.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.7thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "50000 copies",
      ru: "50000 копий",
    },
  "Srimad-Bhagavatam.7thCanto_Pt1chap1-5.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt2chap6-10.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt2chap6-10.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.7thCanto_Pt2chap6-10.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.7thCanto_Pt2chap6-10.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt3chap10-15.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.7thCanto_Pt3chap10-15.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.7thCanto_Pt3chap10-15.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.7thCanto_Pt3chap10-15.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt1chap1-8.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt1chap1-8.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.8thCanto_Pt1chap1-8.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.8thCanto_Pt1chap1-8.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt2chap9-16.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt2chap9-16.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.8thCanto_Pt2chap9-16.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.8thCanto_Pt2chap9-16.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt3chap17-24.1stEd.1976.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.8thCanto_Pt3chap17-24.1stEd.1976.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.8thCanto_Pt3chap17-24.1stEd.1976.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.8thCanto_Pt3chap17-24.1stEd.1976.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt1chap1-8.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt1chap1-8.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.9thCanto_Pt1chap1-8.1stEd.1977.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.9thCanto_Pt1chap1-8.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt2chap9-16.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt2chap9-16.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.9thCanto_Pt2chap9-16.1stEd.1977.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.9thCanto_Pt2chap9-16.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt3chap17-24.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Srimad-Bhagavatam.9thCanto_Pt3chap17-24.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Srimad-Bhagavatam.9thCanto_Pt3chap17-24.1stEd.1977.En.1st_Printing.hardcover-tableCopies":
    {
      en: "20000 copies",
      ru: "20000 копий",
    },
  "Srimad-Bhagavatam.9thCanto_Pt3chap17-24.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.1stEd.1972.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.1stEd.1972.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.1stEd.1972.En.1st_Printing.paperback-tableCopies":
    {
      en: "X0000 copies",
      ru: "X0000 копий",
    },
  "TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj.1stEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.1st_Printing.hardcover-tableCopies":
    {
      en: "X0000 copies",
      ru: "X0000 копий",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.6th_Printing.paperback-tableCopies":
    {
      en: "X0000 copies",
      ru: "X0000 копий",
    },
  "Teachings_of_Lord_Caitanya.1stEd.1968.En.6th_Printing.paperback-tableNprinting":
    {
      en: "Sixth Printing",
      ru: "Шестой Тираж",
    },
  "Teachings_of_Lord_Caitanya.2ndEd.1974.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Teachings_of_Lord_Caitanya.2ndEd.1974.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Teachings_of_Lord_Caitanya.2ndEd.1974.En.1st_Printing.paperback-tableCopies":
    {
      en: "X0000 copies",
      ru: "X0000 копий",
    },
  "Teachings_of_Lord_Caitanya.2ndEd.1974.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "Teachings_of_Lord_Kapila.1stEd.1977.En.1st_Printing.hardcover-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "Teachings_of_Lord_Kapila.1stEd.1977.En.1st_Printing.hardcover-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "Teachings_of_Lord_Kapila.1stEd.1977.En.1st_Printing.hardcover-tableCopies": {
    en: "50000 copies",
    ru: "50000 копий",
  },
  "Teachings_of_Lord_Kapila.1stEd.1977.En.1st_Printing.hardcover-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "The_Nectar_of_Devotion.1stEd.1970.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "The_Nectar_of_Devotion.1stEd.1970.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "The_Nectar_of_Devotion.1stEd.1970.En.1st_Printing.paperback-printingText": {
    en: 'The type of binding of the book of the 1st printing is not fully verified!<br> **This printing does not include the "References, Note On Transliterated Sanskrit Words" pages and has a total number of pages in the book that is less than what is registered with the copyright office.',
    ru: 'Информация о типе переплёта этого принта установлена не точно!<br>**Этот тираж не включает в себя страницы "References, Note On Transliterated Sanskrit Words" и имеет общее колличество страниц в книге меньше чем зарегестрированно в офисе авторских прав..',
  },
  "The_Nectar_of_Devotion.1stEd.1970.En.1st_Printing.paperback-tableCopies": {
    en: "X0000 copies",
    ru: "X0000 копий",
  },
  "The_Nectar_of_Devotion.1stEd.1970.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "The_Nectar_of_Devotion.1stEd.1970.En.2nd_Printing.paperback-tableCopies": {
    en: "X0000 copies",
    ru: "X0000 копий",
  },
  "The_Nectar_of_Devotion.1stEd.1970.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "The_Nectar_of_Devotion.1stEd.1970.En.5th_Printing.paperback-tableCopies": {
    en: "X0000 copies",
    ru: "X0000 копий",
  },
  "The_Nectar_of_Devotion.1stEd.1970.En.5th_Printing.paperback-tableNprinting":
    {
      en: "Fifth Printing",
      ru: "Пятый Тираж",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "No authorized translations.",
      ru: "Нет авторизованных переводов.",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.1st_Printing.paperback-tableCopies":
    {
      en: "10000 copies",
      ru: "10000 копий",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.2nd_Printing.paperback-tableCopies":
    {
      en: "100000 copies",
      ru: "100000 копий",
    },
  "The_Nectar_of_Instruction.1stEd.1975.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "The_Perfection_of_Yoga.1stEd.1972.En.1st_Printing.paperback-infoTableNprinting":
    {
      en: "1st Printing",
      ru: "1й Тираж",
    },
  "The_Perfection_of_Yoga.1stEd.1972.En.1st_Printing.paperback-lineTranslatedInto":
    {
      en: "Spanish",
      ru: "Испанский",
    },
  "The_Perfection_of_Yoga.1stEd.1972.En.1st_Printing.paperback-tableCopies": {
    en: "30000 copies",
    ru: "30000 копий",
  },
  "The_Perfection_of_Yoga.1stEd.1972.En.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "The_Perfection_of_Yoga.1stEd.1972.En.2nd_Printing.paperback-tableCopies": {
    en: "100000 copies",
    ru: "100000 копий",
  },
  "The_Perfection_of_Yoga.1stEd.1972.En.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "The_Perfection_of_Yoga.1stEd.1972.Es.1st_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "The_Perfection_of_Yoga.1stEd.1972.Es.1st_Printing.paperback-tableNprinting":
    {
      en: "First Printing",
      ru: "Первый Тираж",
    },
  "The_Perfection_of_Yoga.1stEd.1972.Es.2nd_Printing.paperback-tableCopies": {
    en: "X00000 copies",
    ru: "X00000 копий",
  },
  "The_Perfection_of_Yoga.1stEd.1972.Es.2nd_Printing.paperback-tableNprinting":
    {
      en: "Second Printing",
      ru: "Второй Тираж",
    },
  "book-1-pageDescr": {
    en: '<i>Bhagavad-gītā</i> is also known as <i>Gītopaniṣad.</i> It is the essence of Vedic knowledge and one of the most important <i>Upaniṣads</i> in Vedic literature. <br> <p style="margin-right:20px"; align="right">(<i>Bhagavad-gītā As It Is</i>. Introduction)</p>',
    ru: '<i>Бхагавад-гūтā</i> известна ещё и как <i>Гūтапанишад.</i> Она выражает суть Ведического познания и является одной из самых важных <i>Упанишад</i> в Ведической литературе. <br> <p style="margin-right:20px"; align="right">(<i>Бхагавад-гūтā Как Она Есть</i>. Введение)</p>',
  },
  "book-1-pageNameImage": {
    en: "img/titles/Bhagavad-gita_As_It_Is/book_name_en.svg",
    ru: "img/titles/Bhagavad-gita_As_It_Is/book_name_ru.svg",
  },
  "book-10-pageDescr": {
    en: "Did you ever wonder whether you could exist apart from your physical body? What actually happens at the time of death? Is there such a thing as reincarnation? In this book you will discover convincing and authoritative answers.",
    ru: "Вы когда-нибудь задумывались, можете ли вы существовать отдельно от своего физического тела? Что на самом деле происходит в момент смерти? Существует ли такая вещь, как реинкарнация? В этой книге вы найдете убедительные и авторитетные ответы.",
  },
  "book-10-pageNameImage": {
    en: "img/titles/Beyond_Birth_and_Death/book_name_en.svg",
    ru: "img/titles/Beyond_Birth_and_Death/book_name_en.svg",
  },
  "book-11-pageDescr": {
    en: "An enjoyable introduction to meditation. It gives a lucid explanation of the psychology, techniques and purposes of <i>yoga</i>. And it makes a summary and comparison of the different <i>yoga</i> systems.<br>Dr. Frank Ledworth, University of St. Andrews, said of it, “Most useful for anyone wishing to understand the meaning of <i>yoga</i>.”",
    ru: "Приятное введение в медитацию. Она дает ясное объяснение психологии, методов и целей <i>йоги</i>. И это делает резюме и сравнение различных систем <i>йоги</i>.<br>Доктор Фрэнк Ледворт из Сент-Эндрюсского университета сказал о ней: “Наиболее полезная для всех, кто хочет понять значение <i>йоги</i>”.",
  },
  "book-11-pageNameImage": {
    en: "img/titles/The_Perfection_of_Yoga/book_name_en.svg",
    ru: "img/titles/The_Perfection_of_Yoga/book_name_en.svg",
  },
  "book-12-pageDescr": {
    en: "Across five centuries and half the globe comes this compact guidebook of essential spiritual teachings. How to choose a <i>guru,</i> how to practice <i>yoga,</i> even where to live–you’ll find it all in this invaluable work originally written in Sanskrit by Śrīla Rūpa Gosvāmī, the greatest spiritual genius of medieval India.<br>Now translated and illuminated by Rūpa Gosvāmī’s modern successor, His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, <i>The Nectar of Instruction</i> is the key to enlightenment for all seekers on the path of spiritual perfection.",
    ru: "Across five centuries and half the globe comes this compact guidebook of essential spiritual teachings. How to choose a <i>guru,</i> how to practice <i>yoga,</i> even where to live–you’ll find it all in this invaluable work originally written in Sanskrit by Śrīla Rūpa Gosvāmī, the greatest spiritual genius of medieval India.<br>Now translated and illuminated by Rūpa Gosvāmī’s modern successor, His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda, <i>The Nectar of Instruction</i> is the key to enlightenment for all seekers on the path of spiritual perfection.",
  },
  "book-12-pageNameImage": {
    en: "img/titles/The_Nectar_of_Instruction/book_name_en.svg",
    ru: "img/titles/The_Nectar_of_Instruction/book_name_en.svg",
  },
  "book-13-pageDescr": {
    en: "LONG AGO, in an age we know about only from the epics of ancient India, the great sage Kapila made His appearance on earth–from the womb of the saintly Devahuti. When her husband left home to seek spiritual perfection in the fores Devahuti implored her divine son Kapila to lead her to enlightenment Lord Kapila then showed her the way of Sāṅkhya–the analytical pathway to a higher understanding of the world, the self, and the ultimate source of everything.<br>Here the world’s most distinguished teacher of Vedic philosophy and religion shows us just how relevant Lord Kapila’s ancient teachings are to us today. Through the way of Sāṅkhya, as explained in this book, we learn about the qualities of the spiritual master, the science of meditation, the psychology of consciousness, the symptoms of the self-realized person, the secret of transcendental knowledge, and the attainment of spreme liberation. ",
    ru: "LONG AGO, in an age we know about only from the epics of ancient India, the great sage Kapila made His appearance on earth–from the womb of the saintly Devahuti. When her husband left home to seek spiritual perfection in the fores Devahuti implored her divine son Kapila to lead her to enlightenment Lord Kapila then showed her the way of Sāṅkhya–the analytical pathway to a higher understanding of the world, the self, and the ultimate source of everything.<br>Here the world’s most distinguished teacher of Vedic philosophy and religion shows us just how relevant Lord Kapila’s ancient teachings are to us today. Through the way of Sāṅkhya, as explained in this book, we learn about the qualities of the spiritual master, the science of meditation, the psychology of consciousness, the symptoms of the self-realized person, the secret of transcendental knowledge, and the attainment of spreme liberation. ",
  },
  "book-13-pageNameImage": {
    en: "img/titles/Teachings_of_Lord_Kapila/book_name_en.svg",
    ru: "img/titles/Teachings_of_Lord_Kapila/book_name_en.svg",
  },
  "book-14-pageDescr": {
    en: "",
    ru: "",
  },
  "book-14-pageNameImage": {
    en: "img/titles/Krsna_Consciousness_THE_MATCHLESS_GIFT/book_name_en.svg",
    ru: "img/titles/Krsna_Consciousness_THE_MATCHLESS_GIFT/book_name_en.svg",
  },
  "book-15-pageDescr": {
    en: "",
    ru: "",
  },
  "book-15-pageNameImage": {
    en: "img/titles/On_the_Way_to_KRSNA/book_name_en.svg",
    ru: "img/titles/On_the_Way_to_KRSNA/book_name_en.svg",
  },
  "book-16-pageDescr": {
    en: "Today I shall speak before you of the history of a boy devotee. His name is Prahlad Maharaj, and he was born in a family which was stubbornly atheistic. There are two kinds of men in this world; one is called the demon, and the other is called the demigod. What is the difference between them? The main difference is that the demigods or godly persons are devoted to the Supreme Lord, whereas the demons are atheistic. They do not believe in God because they are materialists. These two classes of men always exist in this world. At the present moment, due to this age of Kali (Quarrel), the number of demons has increased, but the classification has existed since the beginning of creation. This incident which I am narrating to you occurred very, very long ago, a few million years after the time of creation.",
    ru: "Today I shall speak before you of the history of a boy devotee. His name is Prahlad Maharaj, and he was born in a family which was stubbornly atheistic. There are two kinds of men in this world; one is called the demon, and the other is called the demigod. What is the difference between them? The main difference is that the demigods or godly persons are devoted to the Supreme Lord, whereas the demons are atheistic. They do not believe in God because they are materialists. These two classes of men always exist in this world. At the present moment, due to this age of Kali (Quarrel), the number of demons has increased, but the classification has existed since the beginning of creation. This incident which I am narrating to you occurred very, very long ago, a few million years after the time of creation.",
  },
  "book-16-pageNameImage": {
    en: "img/titles/TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj/book_name_en.svg",
    ru: "img/titles/TRANSCENDENTAL_Teachings_Of_Prahlad_Maharaj/book_name_en.svg",
  },
  "book-17-pageDescr": {
    en: "",
    ru: "",
  },
  "book-17-pageNameImage": {
    en: "img/titles/Lord_Caitanya_in_Five_Features/book_name_en.svg",
    ru: "img/titles/Lord_Caitanya_in_Five_Features/book_name_en.svg",
  },
  "book-18-pageDescr": {
    en: '“This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting and it is joyfully performed.”<br><p style="margin-right:20px"; align="right">(<i>Bhagavad-gītā</i> 9.2)</p> ',
    ru: '“This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting and it is joyfully performed.”<br><p style="margin-right:20px"; align="right">(<i>Bhagavad-gītā</i> 9.2)</p> ',
  },
  "book-18-pageNameImage": {
    en: "img/titles/RAJA-VIDYA_The_King_of_Knowledge/book_name_en.svg",
    ru: "img/titles/RAJA-VIDYA_The_King_of_Knowledge/book_name_en.svg",
  },
  "book-19-pageDescr": {
    en: '“After many births and deaths, he who is actually in knowledge surrenders unto Kṛṣṇa knowing Him to be the cause of all causes and all that is.<br>Such a great soul is very rare.”<br><p style="margin-right:20px"; align="right"><i>Bhagavad-gītā (7.19)</i> </p>',
    ru: '“After many births and deaths, he who is actually in knowledge surrenders unto Kṛṣṇa knowing Him to be the cause of all causes and all that is.<br>Such a great soul is very rare.”<br><p style="margin-right:20px"; align="right"><i>Bhagavad-gītā (7.19)</i> </p>',
  },
  "book-19-pageNameImage": {
    en: "img/titles/Elevation_to_Krsna_Consciousness/book_name_en.svg",
    ru: "img/titles/Elevation_to_Krsna_Consciousness/book_name_en.svg",
  },
  "book-2-pageDescr": {
    en: '<i>Śrīmad-Bhāgavatam</i> is transcendental science not only to know the ultimate source of every thing but also to know our relation with Him and our duty towards perfection of the human society on the basis of this perfect knowledge. <br> <p style="margin-right:20px"; align="right"><i>Śrīmad-Bhāgavatam</i> (Preface)</p>',
    ru: '<i>Śrīmad-Bhāgavatam</i> is transcendental science not only to know the ultimate source of every thing but also to know our relation with Him and our duty towards perfection of the human society on the basis of this perfect knowledge. <br> <p style="margin-right:20px"; align="right"><i>Śrīmad-Bhāgavatam</i> (Preface)</p>',
  },
  "book-2-pageNameImage": {
    en: "img/titles/Srimad-Bhagavatam/book_name_en.svg",
    ru: "img/titles/Srimad-Bhagavatam/book_name_en.svg",
  },
  "book-3-pageDescr": {
    en: '<i>Śrī Caitanya-caritāmṛita</i> is the authorized work on the life and teachings of Śrī Kṛṣṇa Caitanya—the philosopher, saint, spiritual preceptor, mystic and divine incarnation who pioneered a great social and religious movement in Sixteenth Century India. His teachings, which embody the highest philosophical and theolgoical truths, have affected centuries of religious and philosophical thinkers until the present day.<br>This translation and commentary on the original Bengali text is the work of His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda (pictured above), the world’s most distinguished scholar and teacher of Indian thought and culture and author of the best-selling <i>Bhagavad-gītā As It Is.</i> This translation of <i>Śrī Caitanya-caritāmṛita</i> represents a contribution of major importance to the intellectual, cultural and spiritual life of contemporary man.<br><p style="margin-right:20px"; align="right">(C.C. back cover)</p> ',
    ru: '<i>Śrī Caitanya-caritāmṛita</i> is the authorized work on the life and teachings of Śrī Kṛṣṇa Caitanya—the philosopher, saint, spiritual preceptor, mystic and divine incarnation who pioneered a great social and religious movement in Sixteenth Century India. His teachings, which embody the highest philosophical and theolgoical truths, have affected centuries of religious and philosophical thinkers until the present day.<br>This translation and commentary on the original Bengali text is the work of His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda (pictured above), the world’s most distinguished scholar and teacher of Indian thought and culture and author of the best-selling <i>Bhagavad-gītā As It Is.</i> This translation of <i>Śrī Caitanya-caritāmṛita</i> represents a contribution of major importance to the intellectual, cultural and spiritual life of contemporary man.<br><p style="margin-right:20px"; align="right">(C.C. back cover)</p> ',
  },
  "book-3-pageNameImage": {
    en: "img/titles/Sri_Caitanya-caritamrita/book_name_en.svg",
    ru: "img/titles/Sri_Caitanya-caritamrita/book_name_en.svg",
  },
  "book-4-pageDescr": {
    en: '“The Supreme Personality of Godhead is Kṛṣṇa [pronounced KRISHNA]. He has an eternal, blissful, spiritual body. He is the origin of all. He has no other origin, and He is the prime cause of all causes.”<br><p style="margin-right:20px"; align="right"><i>Brahma-saṁhitā</i> (5.1)</p> ',
    ru: '“The Supreme Personality of Godhead is Kṛṣṇa [pronounced KRISHNA]. He has an eternal, blissful, spiritual body. He is the origin of all. He has no other origin, and He is the prime cause of all causes.”<br><p style="margin-right:20px"; align="right"><i>Brahma-saṁhitā</i> (5.1)</p> ',
  },
  "book-4-pageNameImage": {
    en: "img/titles/KRSNA_The_Supreme_Personality_of_Godhead/book_name_en.svg",
    ru: "img/titles/KRSNA_The_Supreme_Personality_of_Godhead/book_name_en.svg",
  },
  "book-5-pageDescr": {
    en: "<i>TEACHINGS OF LORD CAITANYA–A Treatise on Factual Spiritual Life (ISKCON, 1968)</i><br>For thousands of years, sincere souls all over the world in search of spiritual realization have accepted <i>Bhagavad-gītā</i> as their most basic and profound text. Lord Caitanya, the most munificent incarnation of Godhead, appeared 500 years ago to demonstrate by example how to live the teachings of <i>Bhagavad-gītā</i> in the present age. <i>Teachings of Lord Caitanya</i> recounts the words and deeds of this great saint. Lord Caitanya was famous as a scholar and spoke authoritatively on Kṛṣṇa, <i>yoga,</i> liberation, and <i>nirvana;</i> still He is better known as the divine origin of the Hare Kṛṣṇa movement, distributing love of God simply by singing the holy names. In His profound discourses on <i>Vedānta</i> and in His ecstatic <i>saṅkīrtana</i> festivals, Lord Caitanya was an example to all of how to attain the ultimate goal of life–Love of God–and this most advanced work on spiritual science can bring the reader into loving reciprocation with that Absolute Truth.",
    ru: "<i>TEACHINGS OF LORD CAITANYA–A Treatise on Factual Spiritual Life (ISKCON, 1968)</i><br>For thousands of years, sincere souls all over the world in search of spiritual realization have accepted <i>Bhagavad-gītā</i> as their most basic and profound text. Lord Caitanya, the most munificent incarnation of Godhead, appeared 500 years ago to demonstrate by example how to live the teachings of <i>Bhagavad-gītā</i> in the present age. <i>Teachings of Lord Caitanya</i> recounts the words and deeds of this great saint. Lord Caitanya was famous as a scholar and spoke authoritatively on Kṛṣṇa, <i>yoga,</i> liberation, and <i>nirvana;</i> still He is better known as the divine origin of the Hare Kṛṣṇa movement, distributing love of God simply by singing the holy names. In His profound discourses on <i>Vedānta</i> and in His ecstatic <i>saṅkīrtana</i> festivals, Lord Caitanya was an example to all of how to attain the ultimate goal of life–Love of God–and this most advanced work on spiritual science can bring the reader into loving reciprocation with that Absolute Truth.",
  },
  "book-5-pageNameImage": {
    en: "img/titles/Teachings_of_Lord_Caitanya/book_name_en.svg",
    ru: "img/titles/Teachings_of_Lord_Caitanya/book_name_en.svg",
  },
  "book-6-pageDescr": {
    en: "<b>The Nectar of Devotion</b> is a summary study of Śrīla Rūpa Gosvāmī’s <b>Bhakti-rasāmṛta-sindhu</b>, or “the nectar which is derived from the ocean of devotion (<b>bhakti</b>).” It fully contains the complete science of <b>bhakti-yoga</b>, or linking with the Supreme by transcendental loving devotion. <b>Bhakti-yoga</b> is the highest path of attaining God consciousness, but it is simultaneously simple and sublime. It is recommended for everyone in this age.",
    ru: "<b>The Nectar of Devotion</b> is a summary study of Śrīla Rūpa Gosvāmī’s <b>Bhakti-rasāmṛta-sindhu</b>, or “the nectar which is derived from the ocean of devotion (<b>bhakti</b>).” It fully contains the complete science of <b>bhakti-yoga</b>, or linking with the Supreme by transcendental loving devotion. <b>Bhakti-yoga</b> is the highest path of attaining God consciousness, but it is simultaneously simple and sublime. It is recommended for everyone in this age.",
  },
  "book-6-pageNameImage": {
    en: "img/titles/The_Nectar_of_Devotion/book_name_en.svg",
    ru: "img/titles/The_Nectar_of_Devotion/book_name_en.svg",
  },
  "book-7-pageDescr": {
    en: "<i>ŚRI ĪŚOPANIṢAD—The knowledge that brings one nearer to the Supreme Personality of Godhead, Kṛṣṇa. (ISKCON PRESS, 1970)</i><br>All the major scriptures of the world indicate that God is not impersonal, but is a person. From the most authoritative sources, the famed 108 <i>Upaniṣads</i> of India, <i>Śrī Īśopaniṣad</i> supplies revealed evidence that the Personality of Godhead is the creator, maintainer and destroyer of everything that exists, and revives the dormant hope of all living beings—to transcend this conditioned state and gain the eternal, blissful association of the Supreme Personality of Godhead. ",
    ru: "<i>ŚRI ĪŚOPANIṢAD—The knowledge that brings one nearer to the Supreme Personality of Godhead, Kṛṣṇa. (ISKCON PRESS, 1970)</i><br>All the major scriptures of the world indicate that God is not impersonal, but is a person. From the most authoritative sources, the famed 108 <i>Upaniṣads</i> of India, <i>Śrī Īśopaniṣad</i> supplies revealed evidence that the Personality of Godhead is the creator, maintainer and destroyer of everything that exists, and revives the dormant hope of all living beings—to transcend this conditioned state and gain the eternal, blissful association of the Supreme Personality of Godhead. ",
  },
  "book-7-pageNameImage": {
    en: "img/titles/Sri_Isopanisad/book_name_en.svg",
    ru: "img/titles/Sri_Isopanisad/book_name_en.svg",
  },
  "book-8-pageDescr": {
    en: "This book is an authentic discussion by A.C. Bhaktivedānta Swāmī on the techniques and practice of the <i>“yoga”</i> system by which one can leave this body for travel to other material planets. The ultimate unobstructed aim of all such travel is revealed through the techniques of <i>“bhakti-yoga:”</i> by purified consciousness through the development of love of God one can travel beyond the material universes and enter into the spiritual planets for eternal association with the Personality of Godhead.<br><i>“Easy Journey to Other Planets”</i> is intended as practical guide with the highest eternal pleasure as its end.",
    ru: "This book is an authentic discussion by A.C. Bhaktivedānta Swāmī on the techniques and practice of the <i>“yoga”</i> system by which one can leave this body for travel to other material planets. The ultimate unobstructed aim of all such travel is revealed through the techniques of <i>“bhakti-yoga:”</i> by purified consciousness through the development of love of God one can travel beyond the material universes and enter into the spiritual planets for eternal association with the Personality of Godhead.<br><i>“Easy Journey to Other Planets”</i> is intended as practical guide with the highest eternal pleasure as its end.",
  },
  "book-8-pageNameImage": {
    en: "img/titles/Easy_Journey_to_Other_Planets/book_name_en.svg",
    ru: "img/titles/Easy_Journey_to_Other_Planets/book_name_en.svg",
  },
  "book-9-pageDescr": {
    en: "This topmost <i>yoga</i> system was described by Kṛṣṇa in the <i>Gītā</i> to His most intimate friend, Arjuna. In the beginning, the Lord said that this system can he practiced only by a person who has developed attachment for it. This Kṛṣṇa conscious <i>yoga</i> system cannot be practiced by an ordinary man who has no attachment for Kṛṣṇa, for it is a different system, and the topmost–<i>bhakti-yoga.</i>",
    ru: "This topmost <i>yoga</i> system was described by Kṛṣṇa in the <i>Gītā</i> to His most intimate friend, Arjuna. In the beginning, the Lord said that this system can he practiced only by a person who has developed attachment for it. This Kṛṣṇa conscious <i>yoga</i> system cannot be practiced by an ordinary man who has no attachment for Kṛṣṇa, for it is a different system, and the topmost–<i>bhakti-yoga.</i>",
  },
  "book-9-pageNameImage": {
    en: "img/titles/KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System/book_name_en.svg",
    ru: "img/titles/KRSNA_CONSCIOUSNESS_The_Topmost_Yoga_System/book_name_en.svg",
  },
  //***STOP_AUTOGENERATE_LANGUAGE***

  final_zaglushka_bez_zapyatoy: {
    ru: "noset",
    en: "example",
  },
};

export default languages;

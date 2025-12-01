// Basic interactivity: render services, modals, mobile nav toggle, simple animations

const services = [
  {
    id: 'boyun',
    title: 'Boyun Ağrısı',
    img: 'img/boyun.jpg',
    short: 'Boyun fıtığı, omurlar arasındaki diskin sinirlere baskı yapması sonucu ağrı, tutulma ve kollara yayılan uyuşma oluşturur.',
    long: `
    <p>Refleksoloji, vücutta belirli noktalara yapılan bilinçli dokunuşlarla sinir sistemi ve kas yapısı üzerinde dengeleyici bir etki yaratmayı amaçlayan tamamlayıcı bir terapi yöntemidir. Boyun fıtığı vakalarında refleksoloji doğrudan omurga bölgesine müdahale etmez, bunun yerine vücudun doğal iyileşme sürecini destekler.</p>
    <p>Boyun bölgesine karşılık gelen refleks noktaları genellikle ayak başparmağının alt kısmında ve el başparmağının diplerinde bulunur. Bu alanlara yapılan yumuşak basınç, boyun kaslarında biriken gerginliği azaltır, kas spazmlarının gevşemesine yardımcı olur ve kan dolaşımını destekler.</p>
    <p>Sinir sistemi üzerindeki etkisi sayesinde refleksoloji, sinir basısının neden olduğu ağrıları hafifletmeye yardımcı olur. Düzenli seanslar sinir iletiminin düzenlenmesine ve kasların esnekliğinin artmasına katkı sağlar.</p>
    <p>Uzun süre masa başında çalışan, duruş bozukluğu yaşayan veya stres nedeniyle kas gerginliği hisseden kişilerde refleksoloji hem koruyucu hem de destekleyici bir terapi olarak etkilidir.</p>
    <p>Sonuç olarak refleksoloji, boyun fıtığı tedavisinde ağrının azaltılması, dolaşımın artırılması ve genel rahatlamanın sağlanmasında güçlü bir destek sunar.</p>
    `
  },
  {
    id: 'bel',
    title: 'Bel Ağrısı',
    img: 'img/bel.jpg',
    short: 'Bel fıtığı, diskin sinir köklerine baskısı sonucu belde ve bacakta şiddetli ağrı ve hareket kısıtlılığına sebep olur.',
    long: `
    <p>Bel fıtığında refleksoloji, omurga ve sinir sistemiyle bağlantılı refleks alanlarına yapılan basınçlarla vücudun gevşemesine destek olur. Böylece sinir iletimini düzenleyerek ağrının azalmasına katkı sağlar.</p>
    <p>Ayak tabanında omurga hattına denk gelen bölgelerin çalışılması, bel kaslarının rahatlamasına ve dolaşımın hızlanmasına yardımcı olur.</p>
    <p>Kasların gevşemesi, omurga üzerindeki baskının hafiflemesine ve hareket özgürlüğünün artmasına katkıda bulunur. Bu sayede ağrı hissi azalır ya da hafifler.</p>
    <p>Düzenli seanslar sinir basısının etkilerini azaltarak doku esnekliğini artırır. Günlük yaşam konforu belirgin şekilde iyileşir.</p>
    `
  },
  {
    id: 'topuk',
    title: 'Topuk Dikeni',
    img: 'img/topukdikeni.jpg',
    short: 'Topuk dikeni, topuk altındaki kalsiyum birikimi nedeniyle özellikle sabah ilk adımlarda batıcı ağrıya yol açar.',
    long: `
    <p>Topuk dikeni genellikle ayağın aşırı yüklenmesi sonucu gelişir. Refleksoloji, ayak tabanındaki özel noktalara yapılan uygulamalarla bu bölgedeki dolaşımı canlandırmayı amaçlar.</p>
    <p>Kas ve bağ dokularındaki gerginlik azalır, ağrının hafiflemesiyle yürüyüş sırasında konfor artar. Dolaşımın artması, iltihaplı bölgenin toparlanmasını destekler.</p>
    <p>Düzenli seanslar, sabahları hissedilen batıcı ağrının azalmasına yardımcı olur. Basıncın dengelenmesiyle topuğa binen yük hafifler.</p>
    <p>Bu yöntem doktor önerileriyle birlikte uygulandığında, iyileşme sürecini destekleyen güvenli bir tamamlayıcı terapi sunar.</p>
    `
  },
  {
    id: 'tenisci',
    title: 'Tenisçi Dirseği',
    img: 'img/dirsek.jpg',
    short: 'Dirsekte tekrar eden zorlamalar sonucu tendonların hasar görmesi ile ağrı ve güçsüzlük oluşur.',
    long: `
    <p>Tenisçi dirseği durumlarında refleksoloji, ön kol ve dirsek bölgesine denk gelen refleks noktalarının uyarılmasıyla kas-tendon yapısının rahatlamasını hedefler.</p>
    <p>Kan dolaşımının artmasıyla birlikte dokuların beslenmesi iyileşir, ağrı ve gerginlik azalır. Bu, iyileşme sürecini hızlandırır.</p>
    <p>Refleksoloji seansları sinir sistemini dengeleyerek stres kaynaklı kas kasılmalarını da azaltır. Hareket kolaylığı sağlar.</p>
    <p>Bu terapi, dirsek gücünü geri kazandırabilir.</p>
    `
  },
  {
    id: 'diz',
    title: 'Diz Ağrısı',
    img: 'img/diz.jpg',
    short: 'Kıkırdak aşınması, bağ yaralanmaları gibi nedenlerle dizde ağrı ve hareket kısıtlılığı gelişir.',
    long: `
    <p>Diz ağrılarında refleksoloji, diz eklemiyle ilişkili refleks alanlarının çalışılmasıyla dolaşımın artmasına ve ödemin azalmasına yardımcı olur.</p>
    <p>Kas gevşemesiyle birlikte hareket açıklığı artar, günlük aktivitelerde rahatlama sağlanır.</p>
    <p>Refleksoloji, bağ ve kas dokularının beslenmesini destekleyerek diz ekleminin esnekliğini korumaya yardımcı olur.</p>
    <p>Düzenli seanslarla uygulandığında ağrının azalmasına ve genel eklem sağlığının korunmasına destek olur.</p>
    `
  },
  {
    id: 'omuz',
    title: 'Omuz Ağrısı',
    img: 'img/omuz.jpg',
    short: 'Kas, tendon veya eklem kaynaklı omuz ağrıları büyük oranda hareketsizlik ve fonksiyon kaybına neden olur.',
    long: `
    <p>Omuz ağrılarında refleksoloji, omuz kaslarını etkileyen refleks bölgelerine yapılan yumuşak basınçlarla kas gerginliğini azaltır.</p>
    <p>Uygulama, dolaşımı artırarak dokuların daha iyi beslenmesini sağlar. Bu da ağrı ve sertlik hissinin azalmasına yardımcı olur.</p>
    <p>Düzenli refleksoloji seansları, omuz hareket açıklığını destekler ve kasların yeniden dengelenmesine katkı sağlar.</p>
    <p>Günlük yaşamda omuz kullanımını kolaylaştırır, özellikle duruş bozukluğu veya stres kaynaklı gerginliklerde etkili bir rahatlama sunar.</p>
    `
  },
  {
    id: 'sirt',
    title: 'Sırt Ağrısı',
    img: 'img/sırt.jpg',
    short: 'Sırt kaslarının zorlanması ve postür bozuklukları yaygın sırt ağrılarına sebep olur.',
    long: `
    <p>Sırt ağrılarında refleksoloji, omurga hattına denk gelen refleks alanlarını uyararak kasların gevşemesine destek olur.</p>
    <p>Kan dolaşımının artması, kas dokularının rahatlamasını ve oksijenlenmenin artmasını sağlar. Böylece ağrı azalır.</p>
    <p>Refleksoloji düzenli olarak uygulandığında duruşun düzelmesine ve sırt kaslarının dayanıklılığının artmasına yardımcı olabilir.</p>
    <p>Stres kaynaklı sırt gerginliklerinde ise sinir sistemini dengeleyerek genel bir rahatlama sağlar.</p>
    `
  },
  {
    id: 'sinuzit',
    title: 'Sinüzit',
    img: 'img/sinüzit.jpg',
    short: 'Sinüslerin iltihaplanmasıyla yüz bölgesinde basınç ve tıkanıklık oluşur.',
    long: `
    <p>Sinüzit durumlarında refleksoloji, yüz ve baş bölgesine karşılık gelen refleks noktalarını uyararak sinüslerin boşalmasına yardımcı olur.</p>
    <p>Uygulama kan dolaşımını ve lenf akışını destekleyerek burun tıkanıklığının azalmasına katkı sağlar.</p>
    <p>Rahatlatıcı etkisi sayesinde baş bölgesindeki basınç hissini azaltır ve nefes alışverişini kolaylaştırır.</p>
    <p>Düzenli seanslar, özellikle kronik sinüzit rahatsızlığı olan kişilerde yaşam kalitesini artırabilir.</p>
    `
  },
  {
    id: 'migren',
    title: 'Migren',
    img: 'img/migren.jpg',
    short: 'Migren tekrarlayan şiddetli baş ağrıları, ışık ve ses hassasiyetiyle seyreder.',
    long: `
    <p>Migren ataklarında refleksoloji, baş ve boyunla ilişkili refleks bölgelerine yapılan uygulamalarla dolaşımı düzenlemeyi amaçlar.</p>
    <p>Bu yöntem, stres kaynaklı kas kasılmalarını azaltır ve sinir sistemini dengeleyerek ağrı şiddetini hafifletir.</p>
    <p>Refleksoloji düzenli uygulandığında atakların sıklığını azaltmaya yardımcı olabilir.</p>
    <p>Seanslar sırasında genel rahatlama hissi oluşur, bu da hem bedensel hem zihinsel olarak denge sağlar.</p>
    `
  },
  {
    id: 'donukomuz',
    title: 'Donuk Omuz',
    img: 'img/donukomuz.jpg',
    short: 'Omuz eklemi kapsülünün sertleşmesiyle hareket ciddi şekilde kısıtlanır.',
    long: `
    <p>Donuk omuz durumunda refleksoloji, omuz eklemiyle bağlantılı refleks noktalarını çalışarak kasların gevşemesini destekler.</p>
    <p>Bu uygulama dolaşımı artırır ve eklem çevresindeki sertliği azaltarak hareket kabiliyetinin gelişmesine yardımcı olur.</p>
    <p>Refleksoloji aynı zamanda sinir sistemini dengeleyerek kas kasılmalarının azalmasına katkı sağlar.</p>
    <p>Düzenli seanslar, omuz hareketini geri kazanmaya ve ağrının azalmasına destek olur.</p>
    `
  },
  {
    id: 'mide',
    title: 'Mide Yanması',
    img: 'img/mide.jpg',
    short: 'Mide asidinin yemek borusuna kaçmasıyla göğüs ve boğazda yanma hissi oluşur.',
    long: `
    <p>Mide yanmasında refleksoloji, sindirim sistemiyle ilişkili refleks noktalarını çalışarak mide asit dengesini destekler.</p>
    <p>Uygulama sinir sistemini rahatlatarak stresin mide üzerindeki olumsuz etkilerini azaltır.</p>
    <p>Düzenli seanslar, sindirim süreçlerinin düzenlenmesine katkı sağlar ve rahatlama hissi oluşturur.</p>
    <p>Refleksoloji, sindirim sistemiyle ilgili tedavilere destekleyici nitelikte doğal bir yöntemdir.</p>
    `
  },
  {
    id: 'astim',
    title: 'Astım ve KOAH',
    img: 'img/astım.jpg',
    short: 'Solunum yollarının daralması ve iltihaplanması nefes darlığı ve öksürüğe yol açar.',
    long: `
    <p>Refleksoloji, akciğer ve solunumla ilişkili refleks noktalarına uygulanan basınçla nefes açılmasını destekler.</p>
    <p>Göğüs kaslarının rahatlamasıyla solunum kapasitesi artabilir ve nefes darlığı hissi hafifler.</p>
    <p>Bu yöntem, stresin azaltılmasına yardımcı olarak solunum sisteminin daha dengeli çalışmasına katkı sağlar.</p>
    <p>Düzenli refleksoloji seansları, astım ve KOAH hastalarında yaşam kalitesini destekleyici bir tamamlayıcı yöntemdir.</p>
    `
  },
  {
    id: 'kabizlik',
    title: 'Kronik Kabızlık',
    img: 'img/kabizlik.jpg',
    short: 'Bağırsak hareketlerinin yavaşlamasıyla dışkılamada zorluk yaşanır.',
    long: `
    <p>Kronik kabızlıkta refleksoloji, bağırsaklarla ilişkili refleks alanlarını uyararak sindirim sisteminin çalışmasını teşvik eder.</p>
    <p>Bağırsak peristaltizminin düzenlenmesiyle doğal bir rahatlama sağlanabilir.</p>
    <p>Refleksoloji aynı zamanda stresin azaltılmasına yardımcı olur; bu da sindirim sisteminin sağlıklı çalışmasına katkı verir.</p>
    <p>Uygulama, beslenme düzeniyle birlikte kullanıldığında bağırsak fonksiyonlarını destekleyen etkili bir tamamlayıcı yöntemdir.</p>
    `
  },
  {
    id: 'akupunktur',
    title: 'Akupunktur',
    img: 'img/akupunktur.jpg',
    short: 'Geleneksel Çin tıbbına dayanan, belirli noktalara iğne uygulamasıyla denge sağlayan tedavi yöntemidir.',
    long: `
    <p>Akupunktur, enerji akışını dengelemeye yönelik binlerce yıllık bir tedavi yöntemidir. Vücudun belirli noktalarına ince iğneler uygulanarak denge sağlanır.</p>
    <p>Refleksolojiyle birlikte uygulandığında, iki yöntem birbirini destekleyerek hem enerji hem de sinirsel dengeyi güçlendirir.</p>
    <p>Bu kombinasyon ağrıyı azaltmaya, stres seviyesini düşürmeye ve genel iyilik halini artırmaya yardımcı olur.</p>
    <p>Akupunktur ve refleksoloji, birlikte uygulandığında bedensel rahatlama ve zihinsel dinginlik sağlar.</p>
    `
  },
  {
    id: 'kinezyo',
    title: 'Kinezyo Bantlama',
    img: 'img/kinezyobant.jpg',
    short: 'Kas ve eklem fonksiyonlarını desteklemek için özel elastik bantların uygulandığı bir tekniktir.',
    long: `
    <p>Kinezyo bantlama, kasları desteklemek ve dolaşımı artırmak amacıyla uygulanan modern bir yöntemdir.</p>
    <p>Refleksoloji sonrasında uygulandığında, kas dokularındaki rahatlamayı korur ve iyileşme sürecini hızlandırır.</p>
    <p>Bu teknik, kasların doğal hareketini kısıtlamadan destek sağlar. Böylece ağrı azalır, hareket kolaylaşır.</p>
    <p>Kinezyo bantlama, refleksolojiyle kombine edildiğinde kas desteği ve dolaşım açısından etkili bir tamamlayıcıdır.</p>
    `
  },
  {
    id: 'hacamat',
    title: 'Hacamat',
    img: 'img/hacamat.jpg',
    short: 'Vücuttaki toksin yükünün azaltılmasını ve kan akışının düzenlenmesini amaçlayan geleneksel bir tedavi yöntemidir.',
    long: `
    <p>Hacamat, hafif vakum uygulamalarıyla vücuttan toksinlerin uzaklaştırılmasını destekleyen geleneksel bir yöntemdir.</p>
    <p>Refleksolojiyle birlikte uygulandığında, dolaşımın daha dengeli hale gelmesine ve vücudun gevşemesine yardımcı olur.</p>
    <p>Bu iki yöntem bir arada kullanıldığında, hem fiziksel hem zihinsel rahatlama etkisi güçlenir.</p>
    <p>Refleksoloji sonrasında hacamat, kasların yumuşamasını ve vücut enerjisinin dengelenmesini sağlar.</p>
    `
  },
  {
    id: 'suluk',
    title: 'Sülük Tedavisi',
    img: 'img/suluk.jpg',
    short: 'Sülüğün salgıladığı enzimler sayesinde ağrı ve dolaşım sorunlarında tamamlayıcı bir yöntemdir.',
    long: `
  <p>Sülük tedavisi, kan dolaşımını artıran ve ağrıyı azaltan doğal enzimlerin kullanıldığı geleneksel bir yöntemdir. Sülüğün salgıladığı hirudin ve benzeri maddeler, kanın pıhtılaşmasını önleyerek dokuya daha fazla oksijen gitmesine yardımcı olur.</p>
  <p>Refleksolojiyle birlikte uygulandığında, vücuttaki enerji akışının dengelenmesine ve toksinlerin atılmasına destek sağlar. Bu kombinasyon, dolaşımı güçlendirirken aynı zamanda kas ve eklem bölgelerinde biriken gerginliği azaltır.</p>
  <p>İki yöntemin birleşimi, özellikle inflamasyonun azaltılması ve kronik ağrının hafifletilmesi açısından etkili sonuçlar sunabilir. Böylece hem fiziksel hem de ruhsal rahatlama sağlanır.</p>
  <p>Refleksoloji seansı sonrasında yapılan sülük tedavisi, kasların daha hızlı toparlanmasına, lenf drenajının desteklenmesine ve genel iyilik halinin artmasına katkıda bulunur.</p>
  <p>Doğru şekilde ve uzman denetiminde uygulandığında, bu doğal tedavi yöntemi vücudun kendi kendini onarma mekanizmasını güçlendiren güvenli bir tamamlayıcı seçenektir.</p>
  `
  }
];

// Render service cards & modals
(function renderServices() {
  const grid = document.getElementById('servicesGrid');
  const modalsContainer = document.getElementById('serviceModals');
  grid.innerHTML = '';
  modalsContainer.innerHTML = '';
  services.forEach(s => {
    const col = document.createElement('div');
    col.className = 'col-6 col-sm-6 col-md-4 col-xl-3 d-flex';

    col.innerHTML = `
      <div class="card card-service h-100" data-bs-toggle="modal" data-bs-target="#modal-${s.id}">
        <img src="${s.img}" alt="${s.title}" onerror="this.style.opacity=.5; this.nextElementSibling && (this.nextElementSibling.style.display='block')">
        <div class="card-body">
          <div class="card-content">
            <h5 class="card-title">${s.title}</h5>
            <p class="card-text text-muted small">${s.short}</p>
          </div>
          <div class="d-flex justify-content-between align-items-center mt-2 card-information card-btn-group ">
            <button class="btn btn-sm btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modal-${s.id}">Detay</button>
            <div>
              <a class="btn btn-sm btn-success me-1" target="_blank" href="https://api.whatsapp.com/send?phone=905545890935&text=Merhaba%2C%20${encodeURIComponent(s.title)}%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."><i class="fa-brands fa-whatsapp"></i> Randevu</a>
            </div>
          </div>
        </div>
      </div>
    `;
    grid.appendChild(col);

    // modal
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="modal fade" id="modal-${s.id}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${s.title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Kapat"></button>
            </div>
            <div class="modal-body">
             <div class="watermark">
                    DENGE REFLEKSOLOJİ<br><br>NAZİF SERTÇELİK
                    </div>
                    <img src="${s.img}" alt="${s.title}" class="img-fluid mb-3" style="width:100%; max-height:420px; object-fit:cover;">
              <p>${s.long}</p>
            </div>
            <div class="modal-footer">
              <a class="btn btn-success" target="_blank" href="https://api.whatsapp.com/send?phone=905545890935&text=Merhaba%2C%20${encodeURIComponent(s.title)}%20i%C3%A7in%20randevu%20istiyorum."><i class="fa-brands fa-whatsapp"></i> WhatsApp ile Randevu</a>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
            </div>
          </div>
        </div>
      </div>
    `;
    modalsContainer.appendChild(modal);
  });
})();

const btnHizmet = document.querySelector('.hizmet-button');

if (btnHizmet) {
  const hizmetler = services.map(s => s.title); // services dizisinden başlıkları al
  let hizmetIndex = 0;

  // Dinamik olarak tüm hizmetleri <p> olarak ekle
  btnHizmet.innerHTML = '';
  hizmetler.forEach(() => {
    const p = document.createElement('p');
    p.classList.add('hizmet-yazisi');
    btnHizmet.appendChild(p);
  });

  const hizmetYazilari = document.querySelectorAll('.hizmet-yazisi');

  function updateHizmet() {
    hizmetYazilari.forEach((p, i) => {
      p.textContent = hizmetler[(hizmetIndex + i) % hizmetler.length];
    });
    hizmetIndex = (hizmetIndex + 1) % hizmetler.length;
  }

  updateHizmet();
  setInterval(updateHizmet, 3000);
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (mobileMenu.hidden) mobileMenu.hidden = false;
    else mobileMenu.hidden = true;
    mobileMenu.classList.toggle('show');
  });
}

// Smooth scroll for anchor links (offset for fixed header)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 72;
      const rect = target.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const offsetPosition = rect.top + scrollTop - headerOffset - 12;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      if (window.innerWidth < 720 && !mobileMenu.hidden) {
        mobileMenu.hidden = true;
      }
    }
  });
});

const gsContainer = document.querySelector('.gs-container');

if (gsContainer) {
  gsContainer.innerHTML = ''; // Önce varsa içeriği temizle

  services.forEach(service => {
    const btn = document.createElement('button');
    btn.classList.add('hizmet-button'); // Mevcut button class'ı
    btn.textContent = service.title;    // Başlık olarak yazdır
    btn.setAttribute('data-bs-toggle', 'modal');  // Bootstrap modal açma
    btn.setAttribute('data-bs-target', `#modal-${service.id}`); // İlgili modal id'si
    gsContainer.appendChild(btn);
  });
}

const hizmetLi = document.querySelector('.hizmet');

if (hizmetLi && gsContainer) {
  hizmetLi.addEventListener('click', (e) => {
    e.preventDefault(); // a taginin default davranışını engelle
    gsContainer.style.display = (gsContainer.style.display === 'none' || gsContainer.style.display === '') ? 'flex' : 'none';
    // flex kullandık çünkü butonları yan yana dizmek isteyebilirsin
    gsContainer.style.flexWrap = 'wrap';
    gsContainer.style.gap = '10px';
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}


const buttons = document.querySelectorAll('.bilgi');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoText = document.getElementById('infoText');
const closeBtn = document.getElementById('closeInfo');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const title = btn.getAttribute('data-title');
    const text = btn.getAttribute('data-text');
    infoTitle.textContent = title;
    infoText.textContent = text;
    infoBox.style.display = 'block';
  });
});

closeBtn.addEventListener('click', () => {
  infoBox.style.display = 'none';
});

const infoContainer = document.getElementById('infoBox');

infoContainer.addEventListener('click', (e) => {
  // Eğer tıklanan alan infoBox değilse, yani boşluksa kapat
  if (e.target === infoContainer) {
    infoContainer.style.display = 'none';
  }
});
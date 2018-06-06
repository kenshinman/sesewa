Institutions = new Mongo.Collection('institutions');


Meteor.startup(function () {

  function createSchools(schools) {

      schools = schools.split("\n"); //gives an array

      for (var i = 0; i < schools.length; i++) {
          Institutions.insert({
              school_name: schools[i]
          });
      }
  }

    if (Institutions.find().count() === 0) {
        var schools = `
Abdul Gusau Polytechnic (agp)
Abia State College Of Education (ascoed)
Abia State polytechnic (abiapoly)
Abia State University (absu)
Abraham Adesanya Polytechnic (aap)
Abubakar Tafawa Balewa University (atbu)
Abubakar Tatari Ali Polytechnic (atap)
Achievers University (achievers)
Adamawa State polytechnic (adamawapoly)
Adamawa State University (adsu)
Adamu Augie College Of Education (adacoed)
Adekunle Ajasin University (aaua)
Adeleke University (adeleke)
Adeniran Ogunsanya College of Education (aocoed)
Adeyemi College Of Education - Ondo (aceondo)
Afe Babalola University (abuad)
Aflon Digital Institute (aflon)
African Thinkers Community Of Inquiry College Of Education (atcoicoed)
Afrihub Ict Institute (afrihub)
Ahmadu Bello University (abu)
Ahmadu Bello University Teaching Hospital (abuth)
Air Force Institute Of Technology (afit)
Ajayi Crowther University (ajayi)
Akanu Ibiam Federal polytechnic (akanupoly)
Akperan Orshi College Of Agriculture (aocayandev)
Akwa Ibom State College Of Arts And Science (aiscas)
Akwa Ibom State polytechnic (akwaibompoly)
Akwa Ibom State University (akutech)
Akwa Ibom State College Of Education (akscoed)
hikmah Al Hikmah University (al hikmah)
Alhikma College Of Education (alhikma)
All School Communities (school)
All States College Of Education - Akure (allscoed)
Allover central polytechnic (alloverpoly)
Alvan Ikoku College Of Education (alvan)
Ambassador College Of Management And Technology (acmgt)
Ambassador College Of Technology And Paralegal Studies (actps)
Ambrose Alli University (aau)
American University of Nigeria (aun)
Aminu Kano Teaching Hospital (akath)
Anambra State University (ansu)
Angel Crown College Of Education (angelcrown)
Ansar ud deen College Of Education (ansaruddeen)
Apa College Of Education (apacoed)
Arabic And Islamic College Of Education (ariscoed)
Arewa Paralegal Innovation Enterprise (arewa)
Assanusiyah College Of Education (asscoed)
Auchi polytechnic (auchipoly)
Audu Bako College Of Agriculture Danbatta (audubako)
Awori District College Of Education (adcoed)
Babcock University (babcock)
Bauchi Institute For Arabic And Islamic Studies (bauchiiais)
Bauchi State University (basu)
Bayelsa State College Of Education (bycoed)
Bayero University Kano (buk)
Bayotijani College Of Education (bayotijani)
Baze University (baze)
Bells University of Technology (bells)
Benson Idahosa University (biu)
Benue State Poly (benpoly)
Benue State University (bsu)
Best Legacy College Of Education (blcoed)
Bingham University (Bingham)
Bowen University (bu)
Buckingham Academy Of Management And Technology (buckiepoly)
Bukar Abba Ibrahim University (bukar)
Business Education Examination Council (beec)
Caleb University (caleb)
Calvin Foundation College Of Education (cfcoed)
Caritas University (caritas)
Catholic University of Nigeria (catholic)
Centre For Creative Arts Education (ccae)
Cetep University (cetep)
Cifman Institute Of Techn. &amp; Management (cifman)
City College Of Education (citycoed)
<strong>City Gate Institute Of Innovation And Technology (citygate)</strong>
College Of Administrative And Business Studies (coabs)
College Of Agriculture And Animal Science (coaas)
College Of Agriculture - Hadijia (coaha)
College Of Agriculture - Jalingo (coaja)
College Of Agriculture - Kabba (coaka)
College Of Agriculture - Lafia (coala)
College Of Agriculture - Zuru (coazu)
College Of Education - Agbor (coeaghor)
College Of Education - Akwanga (coeakwanga)
College Of Education - Ankpa (coeankpa)
College Of Education - Azare (coeazare)
College Of Education - Ekiadolor (coeeki)
College Of Education - Foreign Links Campus Moro (foreignlinks)
College Of Education - Gidan waya - Kafanchan (coekc)
College Of Education - Gindiri (coegindiri)
College Of Education - Hong (coehong)
College Of Education - Igueben (coeigueben)
College Of Education - Ikere (coeikere)
College Of Education - Ilemona (coeilemona)
College Of Education - Ilesha (coeilesa)
College Of Education - Ilorin (coeilorin)
College Of Education - Jalingo (coejalingo)
College Of Education - Katsina ala (coekatsina)
College Of Education - Lafiagi (coedlfg)
College Of Education - Maru (coemaru)
College Of Education - Minna (coeminna)
College Of Education - Moro ife (coemoro)
College Of Education - Oju (coeoju)
College Of Education - Oro (coeoro)
College Of Education - Port Harcourt (coeport)
College Of Education - Waka biu (coewaka)
College Of Education - Warri (coewarri)
Cornerstone College Of Education - Lagos (cornerstone)
Covenant Polytechnic - Aba (copoly)
Covenant University (cu)
Crawford University (crawford)
Crescent University (crescent)
Cross River State College Of Education (crscoed)
Cross River State University of Technology (crutech)
Crown Polytechnic (crownpoly)
Dalewares Institute Of Technology (dalewares)
Delar College Of Education (delarcoed)
Delta State College Of Agriculture (delscoa)
Delta State College Of Physical Education (dscope)
Delta state polytechnic (deltapoly)
Delta State University (delsu)
Diabo Paralegal Training Institute (diabo)
Dorben polytechnic (dorbenpoly)
Dreamville Ltd (ladela School Abuja) (dreamville)
Ebenezer College Of Education (ebecoed)
Ebonyi State College Of Education (ebscoed)
Ebonyi State University (ebsu)
Edo State College Of Agriculture (edsca)
Edo State Institute Of Technology And Management (esitm)
Ekiti State University (eksu)
Elder Oyama Memorial College Of Education (elderoyama)
Emmanuel Alyande College Of Education (eacoedoyo)
Enugu State College Of Education - Technical (escet)
Enugu State University Of Science And Technology (esut)
Farmark Institute Of Employment And Creativity Kaduna (farmark)
FCT College Of Education - Zuba (fctcoezuba)
Federal College Of Agriculture - Akure (fcaa)
Federal College Of Agriculture - Ishiagu (fcai)
Federal College Of Agriculture - Moor Plantation (fcamp)
Federal College Of Animal Health &amp; Production Tech - Ibadan (fcahptib)
Federal College Of Animal Health &amp; Production Tech - Vom (fcahptvom)
Federal College Of Education (Special) - Oyo (fceoyo)
Federal College Of Education (Techinical) Bichi (fcetbichi)
Federal College Of Education (Technical) Akoka (fcetakoka)
Federal College Of Education (Technical) Gusau (fcegusau)
Federal College Of Education (Technical) Omoku (fcetomoku)
Federal College Of Education Abeokuta (fceabeokuta)
Federal College Of Education Asaba (fceasaba)
Federal College Of Education Katsina (fcekatsina)
Federal College Of Education Kontagora (fcekg)
Federal College Of Education Obudu (fceobudu)
Federal College Of Education Okene (fceokene)
Federal College Of Education Umunze (fceumunze)
Federal College Of Education Yola (fceyola)
Federal College Of Education Zaria (fcezaria)
Federal College Of Education - Eha amufu (fceahaamufu)
Federal College Of Education - Gombe (fcegombe)
Federal College Of Education - Kano (fcekano)
Federal College of Education - Pankshin (fcepankshin)
Federal College Of Education - Potiskum (fcepotiskum)
Federal College Of Fisheries And Marine Tech. V.I. (marinecollege)
Federal College Of Forestry Technology - Ibadan (fcftib)
Federal College Of Forestry - Jos (fcfjos)
Federal College Of Forestry - Mechanisation - Afaka (fcfmaf)
Federal College Of Freshwater Fisheries Tech - Baga (fcfftbo)
Federal College Of Freshwater Fisheries Tech - New Bussa (fcfftnewbussa)
Federal College Of Horticulture - Dadin Kowa (fchkowa)
Federal College Of Land Resources Technology - Kuru (fclrtkuru)
Federal College Of Land Resources Technology - Owerri (fclrto)
Federal College Of Orthopedic Technology - Igbobi (fcotigbobi)
Federal College Of Wildlife Management - New Bussa (fcwm)
Federal Cooperative College - Ibadan (fccibadan)
Federal Cooperative College - Kaduna (fcckaduna)
Federal Cooperative College - Oji River (fccojiriver)
Federal polytechnic - Ado Ekiti (ekitipoly)
Federal Polytechnic - Bali (balipoly)
Federal polytechnic - Bauchi (bauchipoly)
Federal polytechnic - Bida (bidapoly)
kebbipoly Federal polytechnic - Birnin Kebbi (birnin kebbipoly)
Federal polytechnic - Damaturu (damaturupoly)
Federal polytechnic - Ede (edepoly)
Federal polytechnic - Idah (idahpoly)
Federal polytechnic - Ilaro (ilaropoly)
Federal Polytechnic - Kaura Namoda (fedponam)
Federal polytechnic - Mubi (mubipoly)
Federal polytechnic - Nasarawa (nasarawapoly)
Federal polytechnic - Nekede (nekedepoly)
Federal Polytechnic - Offa (offapoly)
Federal polytechnic - Oko (okopoly)
Federal School Of Dental Technology And Therapy - Enugu (fedsdtten)
Federal School Of Surveying - Oyo (fssoyo)
Federal University Of Agriculture - Makurdi (fuam)
Federal University of Petroleum Resource (fupre)
Federal University of Technology Akure (futa)
Federal University of Technology Minna (futminna)
Federal University of Technology Yola (futyola)
Federal University of Technology - Owerri (futo)
Federal University - Dutse (fud)
Federal University - Dutsin ma (fudma)
Federal University - Kashere (fuk)
Federal University - Lafia (ful)
Federal University - Lokoja (fulokoja)
Federal University - Ndufu alike (funai)
Federal University - Otuoke (fuotuoke)
Federal University - Oye ekiti (fuoye)
Federal University - Wukari (fuwukari)
Fidei Polytechnic - Gboko (fideipoly)
Flyingdove Institute Of Information Technology - Abuja (flyingdove)
Fountain University (fountain)
Gateway polytechnic Saapade (gatewaypoly)
Godfrey Okoye University (go)
Gombe State university (gomsu)
Grace Polytechnic - Lagos (gracepoly)
Hassan Usman Katsina Poly (hukpoly)
Havard Wilson College Of Education - Aba (hwcoed)
Heritage Polytechnic (heritage)
Highland College Of Tech. &amp; Further Education (highland)
Hill College Of Education (hillcoed)
Hussaini Adamu Federal polytechnic (hussainipoly)
Ibrahim Badamasi Babangida University (ibbu)
Ifo College Of Management And Technology (ifotech)
Igbajo Polytechnic (igbajopoly)
Igbinedion University (iuo)
Imfi - Ict Academy - Uyo (imfi)
Imo State Polytechnic (imopoly)
Imo State University (imsu)
Innovation Institute Of Technology - Kaduna (iitkad)
Institute Of Arabic And Islamic Studies - Olodo (iaisolodo)
Institute of Management Technology - Enugu (imte)
Institute Of Public Health (OAU) - Ile ife (iphoau)
Interlink Polytechnic (interlink)
Isa Kaita College Of Education (ikcoed)
Jama&#8217;atu Nasir Islam College Of Education - Kaduna (jnicoed)
Jibwis College Of Arabic And Islamic Education - Gombe (jcaie)
Jigawa State College Of Education - Gumel (jigcoed)
Jigawa State Institute Of Information Technology (jsiit)
Jigawa State Polytechnic (jigpoly)
Joseph Ayo Babalola University (jabu)
Kaduna Business School (kbs)
Kaduna Polytechnic (kadpoly)
Kaduna State university (kasu)
Kano State College Of Education - Kambotso (kanocoek)
Kano State polytechnic (kanopoly)
Kano University Of Science And Technology (kust)
Karrox ugrl Computer Education &amp; Training Centre (karrox)
Kashim ibrahim College Of Education - Maiduguri (kicoem)
Katsina University (katsu)
Kebbi State College Of Education - Argungu (kscoed)
Kebbi State University Of Science And Technology (ksusta)
Kings Polytechnic (kingspoly)
Kinsey College Of Education - Ilorin (kinseycoed)
Kogi State Polytechnic (ksp)
kogi State University (ksu)
Kwara State polytechnic (kwarapoly)
Kwara State University (kwasu)
Kwararafa College Of Education - Otukpo (kcoeo)
Kwararafa University (kwararafa)
Ladoke Akintola University of Technology (lautech)
Lagos City Computer College - Lagos (lcccl)
Lagos City polytechnic (lagoscitypoly)
Lagos State polytechnic (laspotech)
Lagos State University (lasu)
Landmark University (Landmark)
Lani Stephens Music Institute (lanistephens)
Laser Petroleum Geosciences Centre (laserpgc)
Lead City University (lcu)
Light House Polytechnic (lighthousepoly)
Linet Paul Innovative Institute (linetpaul)
Literacy College Of Management And Technology (lcmt)
Lufodo Academy Of Performing Arts (lufodo)
Madonna University (madonna)
Mahammed Lawan College Of Agriculture - Maiduguri (mlcamai)
Mallam Yahaya Hamza Institute Of Advance Studies - (myhias)
Maritime Academy of Nigeria (maritimeacademy)
Metropolitan Institute Of Technology (metit)
Michael Okpara University of Agriculture (moua)
Michael Otedola College Of Primary Education - Moforiji (mocped)
Mohammed Goni College Of Legal And Islamic Studies (mogcolis)
Moshood Abiola polytechnic (mapoly)
Muftau&#8217; Lanihun College Of Education (mulcoed)
Muhyldeen College Of Education - Ilorin (mcoed)
Murtadha Col. Of Edu. Inst. Of Arabic &amp; Islamic Legal Studies (mcoeiails)
Nana Aishat Memorial College Of Education (namcoed)
Nasarawa State Polytechnic (naspoly)
Nasarawa State University (Nsuk)
National Open University of Nigeria (noun)
Niger Delta University (ndu)
Niger State College Of Agriculture - Mokwa (coamokwa)
Niger State polytechnic (nigerpoly)
Nigeria Army School Of Military Engineering - Makurdi (nasme)
Nigeria Turkish Nile University (ntnu)
Nigerian College of Aviation Technology (ncat)
NIIT (niit)
Nnamdi Azikiwe University (unizik)
Novena University (novena)
Nuhu Bamalli polytechnic (nubapoly)
Nwafor Orizu College Of Education - Nsugbe (nocoed)
Obafemi Awolowo University (oau)
Obong University (ou)
Oduduwa University (oduduwa)
Olabisi Onabanjo University (oou)
Ondo State University of Science and Technology (osustech)
Onit College Of Education Abagana (ocoeda)
Osun State College Of Education - Ila orangun (ossceila)
Osun State College of Technology (osuntechcollege)
Osun State polytechnic (ospoly)
Osun State University (uniosun)
Our Saviour Institute of Science - Agric. &amp; Tech. (osisatech)
Oyo State College Of Agriculture (oyscai)
Oyo State College Of Education (oyocoed)
Paul University (paul)
Petroleum Training Institute (pti)
Plateau State College Of Agriculture - Garkawa (plascag)
Plateau State Polytechnic (plaspoly)
Plateau State University (plasu)
Polytechnic Of Sokoto (polysok)
Ramat polytechnic (ramatpoly)
Redeemer&#8217;s University (run)
Renaissance University (rnu)
Rhema University (rhema)
Rivers State College Of Arts And Science (rivcas)
Rivers State College Of Health Science And Technology (rschst)
Rivers State polytechnic (rivpoly)
Rivers State University of Science and Technology (rsust)
Ronik Polytechnic (ronik)
Royal City College Of Education (royalcoed)
Rufus Giwa polytechnic (rugipo)
Salem University (salem)
Samaru College Of Agriculture (samca)
Samuel Adegboyega University (sau)
School Of Agriculture - Bauchi (soab)
School Of Agriculture - Ikorodu (soai)
Shehu Idris College Of Health Sci &amp; Tech - Makarfi (sichstmakarfi)
Shehu Shagari College Of Education - Sokoto (sscoesok)
South Eastern College of Computer Engineering and Info. Tech. (secceit)
Southern nigeria Institute Of Innovative Technology (sniit)
St. Augustine College Of Education (sacoed)
Tai Solarin University of Education (tasued)
Tansain University (tansain)
Taraba State University (tasu)
Temple gate Polytechnic (templegatepoly)
The African Church College Of Education (taccoed)
The College Of Education - Nsukka (coensukka)
The polytechnic - Ibadan (ibadanpoly)
The Polytechnic - Ile Ife (polyife)
The School Of Information And Media Technology (simtech)
The University Of Education - Ikere Ekiti (tunedik)
Topmost College Of Education (topcoed)
Umar Suleiman College Of Education - Gashua (uscoega)
Umar ibn Ei kanemi College Of Education - Dutsinma (uecoeddut)
Umaru Musa Yar&#8217;adua University (umyu)
Unity College Of Education - Aukpa adoka (unitycoed)
University of Abuja (uniabuja)
University of Agriculture - Abeokuta (unaab)
University of Agriculture - Makurdi (uam)
University of Benin (uniben)
University of Calabar (unical)
University of Ibadan (ui)
University of Ilorin (unilorin)
University of Jos (unijos)
University of Lagos (unilag)
University of Maiduguri (unimaid)
University Of Mkar (unimkar)
University of Nigeria (unn)
University of Port Harcourt (uniport)
University Of Science And Technology - Ifaki ekiti (usti)
University of Uyo (uniuyo)
Usman Dan Fodio University (udusok)
Veritas University - Abuja (veritas)
Waziri Umaru Fed. Polytechnic Birnin Kebbi (wufpbk)
Wellspring University (wellspring)
Wesley University Of Science And Technology (wusto)
Western Delta University (wdu)
Wolex Polytechnic (wolex)
Yaba College of Technology (yabatech)
Yewa Central College Of Education (yewacoed)
Yusuf Bala Usman College Of Legal And General Studies (ybuscolgs)
`;
        // var schoolsArray = [];
        createSchools(schools);


    }
});
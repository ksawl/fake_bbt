var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var links = null; //Создаём переменную, в которой будут храниться ссылки

var loaded = true; //Переменная, которая обозначает, загрузилась ли страница

var data = //Данные о странице
{
	title: "",
//	navigation: "",
	body: "",
	msgu: ""
};

//По умолчанию в макете содержится контент для главной страницы.
//Но если пользователь перейдёт по ссылке, которая ведёт на какую-нибудь статью, он увидит не то, что ожидает.
//Поэтому нужно проверить, на какой странице находится пользователь, и загрузить релевантные данные.


var page = //Элементы, текст в которых будет меняться
{
        title: document.getElementById("title"),
        //      navigation: document.getElementById("navigation"),
	body: document.getElementById("body")
};


function LinkClick(entry, msgu)
{
	console.log("HELLO_3(2)");
	console.log(entry);

	switch(entry)
	{
		case "Main": 
			SendRequest("?page=main", msgu); //Отправляем запрос на сервер
			break;

		case "Trust": 
			SendRequest("?page=trust", msgu); //Отправляем запрос на сервер
			break;

		case "Feedback": 
			SendRequest("?page=feedback", msgu); //Отправляем запрос на сервер
			break;

		case "Articles":
			if(props.length == 3 && !isNaN(props[2]) && Number(props[2]) > 0) //Проверяем валидность идентификатора и тоже отправляем запрос
			{
				SendRequest("?page=articles&id=" + props[2], msgu);
			}
			break;
		default:
//			SendRequest(entry, 'mmm');
			break;
	}

}

function SendRequest(query, msgu)
{
	var xhr = new XMLHttpRequest(); //Создаём объект для отправки запроса
	console.log("HELLO_4.0(3.0)");

	xhr.open("GET", "core4.php" + query + "&msgu=" + msgu, true); //Открываем соединение
//	xhr.open("GET", "annoncment_rt.php" + query, true); //Открываем соединение
	console.log("HELLO_4.1(3.1)");

	xhr.onreadystatechange = function() //Указываем, что делать, когда будет получен ответ от сервера
	{
		console.log("HELLO_4.2(3.7)a");
		if (xhr.readyState != 4) return; //Если это не тот ответ, который нам нужен, ничего не делаем
		console.log("HELLO_4.2(3.8)b");

		//Иначе говорим, что сайт загрузился
		loaded = true;
		console.log("HELLO_4.3(3.9)");

		if (xhr.status == 200) //Если ошибок нет, то получаем данные
		{
			console.log("HELLO_4.4(3.10)");
			GetData(JSON.parse(xhr.responseText), msgu);
//			GetData(JSON.parse(xhr.responseText));
		} 
		else //Иначе выводим сообщение об ошибке
		{
			console.log("HELLO_4.5(3)");
			alert("Loading error! Try again later.");
			console.log(xhr.status + ": " + xhr.statusText);
		}
	}

	console.log("HELLO_4.6(3.2)");
	loaded = false; //Говорим, что идёт загрузка

	//Устанавливаем таймер, который покажет сообщение о загрузке, если она не завершится через 2 секунды
	console.log("HELLO_4.7(3.3)");
	setTimeout(ShowLoading, 2000);
	xhr.send(); //Отправляем запрос
	console.log("HELLO_4.9(3.5)");
}


function GetData(response, msgu) //Получаем данные
{
	data = 
	{
		title: response.title,
//		navigation: response.navigation,
		body: response.body,
		msgu: msgu
	};
	console.log("HELLO_5(4)");
	UpdatePage(); //Обновляем контент на странице
}


function ShowLoading()
{
	console.log("HELLO_6(7)");
	if(!loaded) //Если страница ещё не загрузилась, то выводим сообщение о загрузке
	{
		page.body.innerHTML = "Loading...";
	}
}



function UpdatePage() //Обновление контента
{

//	return data.body;
        $('#body').html(data.body);


	console.log("HELLO_7(5)");
//	page.title.innerText = data.title;
//	page.navigation.innerText = data.navigation;
//	page.body.innerHTML = data.body;

//	document.title = data.title;


//	window.history.pushState(data.body, data.navigation, data.title, "/www" + data.link); //Меняем ссылку
//	window.history.pushState(data.body, data.title, "/spa" + data.link); //Меняем ссылку
//	window.history.pushState(data.body, data.title, data.link); //Меняем ссылку
//	return true;
///	history.pushState(null, null, "entry");

//	обновляет линк
//	window.history.pushState(null, null, data.link);
//	window.history.pushState(null, null, data.msgu);
	
//	location.href = `${window.location.pathname}#${elem.dataset.value}`;
//	localStorage.setItem("defaultLanguage", ru);
//	не срабатывает! разобраться!
//	changeLanguage()


//	TEST LANG
	const languages1 = {
	    pageTitle: {
		ru: "Бхактиведанта Бук Траст",
                en: "Bhaktivedanta Book Trust"
	    },
	    feedbackForm_ThankYou: {
        	ru: `Спасибо!`,
                en: `Thank you!`
            },
        };
        let language = window.location.hash.substring(1);
//	language = langset;
        document.querySelector("[data-select]").value = language;
        document.querySelector("title").innerHTML = languages1.pageTitle[language];
        if (document.querySelectorAll("[data-language]").length > 0) document.querySelectorAll("[data-language]").forEach((elem => {
            elem.classList.remove("_ru");
            elem.classList.remove("_en");
//-            elem.innerHTML = languages1.feedbackForm_ThankYou[language];
//-            elem.innerHTML = languages1[elem.dataset.language][language];
//-            elem.classList.add(`_${language}`);
//            if (languages1[elem.dataset.language][language]) {
//                elem.innerHTML = languages1[elem.dataset.language][language];
//                elem.classList.add(`_${language}`);
//            }
        }));
//	END TEST LANG
 
	
//	location.href = "entry";  // работает но обнавляет страницу

//	window.history.pushState(data.body, data.title, data.link);
//	InitLinks(); //Инициализируем новые ссылки
//	OnLoad();
}



}
/*
     FILE ARCHIVED ON 12:12:23 Dec 15, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:19:51 Oct 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 89.093
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.101
  cdx.remote: 0.092
  esindex: 0.013
  LoadShardBlock: 63.426 (3)
  PetaboxLoader3.datanode: 67.414 (4)
  load_resource: 251.073
  PetaboxLoader3.resolve: 98.44
*/
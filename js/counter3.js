var _____WB$wombat$assign$function_____ = function (name) {
  return (
    (self._wb_wombat &&
      self._wb_wombat.local_init &&
      self._wb_wombat.local_init(name)) ||
    self[name]
  );
};

if (!self.__WB_pmw) {
  self.__WB_pmw = function (obj) {
    this.__WB_source = obj;
    return this;
  };
}

{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  var caution = false;

  function setcookie(name, value, expires, path, domain, secure, samesite) {
    var curCookie =
      name +
      "=" +
      escape(value) +
      (expires ? "; expires=" + expires.toGMTString() : "") +
      (path ? "; path=" + path : "") +
      (domain ? "; domain=" + domain : "") +
      (secure ? "; secure" : "") +
      (samesite ? "; samesite=None" : "; SameSite=Lax");
    if (!caution || (name + "=" + escape(value)).length <= 4000) {
      document.cookie = curCookie;
    }
  }

  function getCookie(name) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1) return null;
    var cookieEndIndex = document.cookie.indexOf(
      ";",
      cookieStartIndex + prefix.length
    );
    if (cookieEndIndex == -1) cookieEndIndex = document.cookie.length;
    return unescape(
      document.cookie.substring(
        cookieStartIndex + prefix.length,
        cookieEndIndex
      )
    );
  }

  function deleteCookie(name, path, domain) {
    if (getCookie(name)) {
      document.cookie =
        name +
        "=" +
        (path ? "; path=" + path : "") +
        (domain ? "; domain=" + domain : "") +
        "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }
  }

  

  lastpath = document.location.pathname;
  hostname0 = document.location.hostname;
  protocol0 = document.location.protocol;

  var uniq = "none";
  var uniqs = "none";
  var visits = "none";
  var clics = "none";
  var sclics = "none";
  var langset = "none";
  var fctime = "none";
  var lctime = "none";

  function SetLangDef(uuid, lastp) {
    var jsonDataSetLangDefCookie = { type: "langdef", uuid: uuid };

    setcookie("langdef", jsonDataSetLangDefCookie);
  }

  function GoToPage(lastp) {
    const ctime = Math.floor(Date.now() / 1000);
    lctime1 = ctime;

    // Время последнего клика
    lctime = getCookie("life");
    if (!lctime) lctime = ctime;
    else lctime = lctime;

    //Сессионная кука
    uniqs = getCookie("uuids");
    uniqs0 = uniqs;
    if (!uniqs) uniqs = uniq2;
    // 20 минутная задержка
    else if (parseInt(lctime) + 1200 < ctime) uniqs = uniq2;
    else uniqs = uniqs;

    // Время первого клика сессии
    fctime = getCookie("stime");
    if (!fctime) fctime = ctime;
    // 20 минутная задержка
    else if (parseInt(lctime) + 1200 < ctime || !uniqs0) fctime = ctime;
    else fctime = fctime;

    // visits count (Уникальные посещения пльзователя)
    visits = getCookie("vcounter");
    if (!visits) visits = 1;
    // 20 минутная задержка
    else if (parseInt(lctime) + 1200 < ctime || !uniqs0)
      visits = parseInt(visits) + 1;
    else visits = visits;

    // Клики за всё время
    clics = getCookie("ccounter");
    if (!clics) clics = 1;
    else clics = parseInt(clics) + 1;

    // Клики в последней сессии
    sclics = getCookie("scounter");
    if (!sclics) sclics = 1;
    else if (parseInt(lctime) + 1200 > ctime && uniqs0)
      sclics = parseInt(sclics) + 1;
    else sclics = 1;

    // Униальный идентификатор пользователя
    //    var uniq = getCookie("uuid")

    uniq = getCookie("uuid");
    if (!uniq) uniq = uniq1;
    else uniq = uniq;

    var None = "None";

    langdef = getCookie("langdef");
    if (!langdef) {
      SetLangDef(uniq, lastp);
      langdef = None;
    } else {
      if (parseInt(lctime) + 1200 < ctime || !uniqs0) {
        SetLangDef(uniq, lastp);
        langdef = None;
      } else {
        langdef = langdef;
      }
    }

    var deflang = "def";

    langset = getCookie("langset");
    if (!langset) {
      if (langdef !== "None") {
        //	        langset = deflang
        langset = langdef;
      } else {
        langset = deflang;
      }
    } else {
      langset = langset;
    }

    visits = getCookie("vcounter");
    if (!visits) visits = 1;
    // 20 минутная задержка
    else if (parseInt(lctime) + 1200 < ctime || !uniqs0)
      visits = parseInt(visits) + 1;
    else visits = visits;

  }


  GoToPage(lastpath);
}

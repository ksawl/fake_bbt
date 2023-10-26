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
      //        console.log(curCookie);
      document.cookie = curCookie;
    }
    //        else
    //        if (confirm("Cookie exceeds 4KB and will be cut!"))
    //                document.cookie = curCookie
  }

  //setCookie('user', 'TEST', {secure: true, 'max-age': 3600, SameSite: None});
  //document.cookie = "user=John; path=/; expires=Tue, 19 Jan 2038 03:14:07 GMT; SameSite=None"

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

  function fixDate(date) {
    var base = new Date(0);
    var skew = base.getTime();
    if (skew > 0) date.setTime(date.getTime() - skew);
  }

  function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

  const uniq1 = uuidv4();
  const uniq2 = uuidv4();

  var now = new Date();
  //var now = new Date()
  //now.setTime(now.getTime() + 10 * 24)
  fixDate(now);
  now.setTime(now.getTime() + 100 * 365 * 24 * 60 * 60 * 1000);

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
  var deviationtime = "0";
  //var ttwrl = 'none'
  //var click_feedback = 'click_feedback';
  //var click_open_popup = 'click_open_popup';
  //var click_close_popup = 'click_close_popup';

  function GetDeviationTime(uuid, lastp) {
    var jsonDataGetDtimeCookie = { type: "getdtime", uuid: uuid };
    var xhr_getdtime = new XMLHttpRequest(); //Создаём объект для отправки запроса
    //xhr_counter.open("GET", "annoncment_rt.php"  + jsonDataCookie, true);
    xhr_getdtime.open("POST", "annoncment_rt.php");
    xhr_getdtime.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    xhr_getdtime.send(JSON.stringify(jsonDataGetDtimeCookie));
    xhr_getdtime.responseType = "text";
    xhr_getdtime.onload = function () {
      if (xhr_getdtime.readyState === xhr_getdtime.DONE) {
        if (xhr_getdtime.status === 200) {
          //                return xhr1.responseText;
          //                console.log(xhr1.response);
          //                console.log(xhr1.responseText);
          reply_timestamp = xhr_getdtime.responseText;
          reply_timestamp = reply_timestamp.replace(/\r|\n/g, "");
          deviationtime = parseInt(reply_timestamp) - parseInt(lctime1);
          setcookie("deviationtime", deviationtime);
          GoToPage_start(lastp, deviationtime);
          //		    setcookie("deviationtime", reply_timestamp);
          //                LinkClick('Feedback', msg_eid);
        }
      }
    };
    xhr_getdtime.onload();
    //    deviationtime = getCookie("deviationtime")
  }
  function SetLangDef(uuid, lastp) {
    var jsonDataSetLangDefCookie = { type: "langdef", uuid: uuid };
    /*var xhr_setlangdef = new XMLHttpRequest(); //Создаём объект для отправки запроса
    //xhr_counter.open("GET", "annoncment_rt.php"  + jsonDataCookie, true);
    xhr_setlangdef.open("POST", "annoncment_rt.php");
    xhr_setlangdef.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    xhr_setlangdef.send(JSON.stringify(jsonDataSetLangDefCookie));
    xhr_setlangdef.responseType = "text";
    xhr_setlangdef.onload = function () {
      if (xhr_setlangdef.readyState === xhr_setlangdef.DONE) {
        if (xhr_setlangdef.status === 200) {
          //                return xhr1.responseText;
          //                console.log(xhr1.response);
          //                console.log(xhr1.responseText);
          reply_langdef = xhr_setlangdef.responseText;
          reply_langdef = reply_langdef.replace(/\r|\n/g, "");
          langdef = reply_langdef;
          //		    deviationtime = parseInt(reply_timestamp) - parseInt(lctime1);
          setcookie("langdef", langdef);
          ////		    GoToPage_start(lastp, langdef);
          //		    setcookie("deviationtime", reply_timestamp);
          //                LinkClick('Feedback', msg_eid);
        }
      }
    };
    xhr_setlangdef.onload();
    //    deviationtime = getCookie("deviationtime")*/
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
      //            deviationtime = 999
      //            deviationtime = getCookie("deviationtime")
    } else {
      if (parseInt(lctime) + 1200 < ctime || !uniqs0) {
        SetLangDef(uniq, lastp);
        langdef = None;
      } else {
        langdef = langdef;
        //                GoToPage_start(lastp, deviationtime);
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

    deviationtime = getCookie("deviationtime");
    if (!deviationtime) {
      GetDeviationTime(uniq, lastp);
      deviationtime = 999;
      //            deviationtime = getCookie("deviationtime")
    } else {
      if (parseInt(lctime) + 1200 < ctime || !uniqs0) {
        GetDeviationTime(uniq, lastp);
        deviationtime = 999;
      } else {
        deviationtime = deviationtime;
        GoToPage_start(lastp, deviationtime);
      }
    }
    //    GoToPage_start(lastp);
  }

  function GoToPage_start(lastp, dtime) {
    //    ttwrl = (Math.floor(Date.now() / 1000) - lctime)

    deviationtime = dtime;
    //setTimeout(function(){
    //    location.reload();
    //}, 300000);

    setcookie("vcounter", visits, now);
    setcookie("ccounter", clics, now);
    setcookie("scounter", sclics, now);
    setcookie("uuid", uniq, now);
    setcookie("uuids", uniqs);
    setcookie("stime", fctime);
    setcookie("life", lctime1);
    //{"type":"feedback","sign":"f1e0010bfru_6671f296-8eb0-439d-9aba-c63ed42dba46_8_197_a8b77655-25cc-4c04-bd71-27803872c1c7_37_1660043134_1660045492_ru","fname":"","contact":"","text":"fg"}
    // Добавляется в app.js
    //setcookie("langset", elem.dataset.value, now);

    // отправлем куки в базу данных
    var jsonDataCookie = {
      type: "cookie",
      object: {
        uuid: uniq,
        vcount: visits,
        ccount: clics,
        uuids: uniqs,
        scount: sclics,
        stime: fctime,
        ltime: lctime1,
        dtime: deviationtime,
        protocol: protocol0,
        dst_host: hostname0,
        lastpath: lastp,
        langset: langset,
      },
    };
    var xhr_counter = new XMLHttpRequest(); //Создаём объект для отправки запроса
    //xhr_counter.open("GET", "annoncment_rt.php"  + jsonDataCookie, true);
    xhr_counter.open("POST", "annoncment_rt.php");
    xhr_counter.setRequestHeader(
      "Content-Type",
      "application/json;charset=UTF-8"
    );
    xhr_counter.send(JSON.stringify(jsonDataCookie));
    xhr_counter.responseType = "text";
    xhr_counter.onload = function () {
      if (xhr_counter.readyState === xhr_counter.DONE) {
        if (xhr_counter.status === 200) {
          //                return xhr1.responseText;
          //                console.log(xhr1.response);
          //                console.log(xhr1.responseText);
          reply_uuid_vcount_timestamp = xhr_counter.responseText;
          reply_timestamp = reply_uuid_vcount_timestamp
            .replace(/\r|\n/g, "")
            .replace(/.*_/g, "");
          //		    deviationtime = parseInt(reply_timestamp) - parseInt(lctime1);
          //		    setcookie("deviationtime", deviationtime);
          //                LinkClick('Feedback', msg_eid);
          //		    GoToPage_start(lastp);
        }
      }
    };
    xhr_counter.onload();
    //    deviationtime = getCookie("deviationtime")
  }

  GoToPage(lastpath);

  //function GoToPage(name) {
  //    var jsonDataCookie1 = {"type":"cookie","object":{"uuid":uniq,"vcount":visits,"ccount":clics,"uuids":uniqs,"scount":sclics,"stime":fctime,"ltime":lctime1,"lastpath":name,"langset":langset}}
  //    var xhr_counter1 = new XMLHttpRequest(); //Создаём объект для отправки запроса
  //    //xhr_counter.open("GET", "annoncment_rt.php"  + jsonDataCookie, true);
  //    xhr_counter1.open("POST", "annoncment_rt.php");
  //    xhr_counter1.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //    xhr_counter1.send(JSON.stringify(jsonDataCookie1));
  //    xhr_counter1.responseType = 'text';
  //    xhr_counter1.onload = function () {
  //        if (xhr_counter1.readyState === xhr_counter1.DONE) {
  //                if (xhr_counter1.status === 200) {
  //    //                return xhr1.responseText;
  //    //                console.log(xhr1.response);
  //    //                console.log(xhr1.responseText);
  //		    msg_eid = xhr_counter1.responseText;
  //    //                LinkClick('Feedback', msg_eid);
  //                }
  //        }
  //    };
  //    xhr_counter1.onload();
  //}

  //var link_mail = 'bhaktivedanta-book-trust.com';
  //var link_tube = 'https://web.archive.org/web/20221215121232/https://www.youtube.com/channel/UCPA-B_6FVj7mGOCbxtfKgQA';
  //var link_prob = 'https://web.archive.org/web/20221215121232/https://leginfo.legislature.ca.gov/faces/codes_displayexpandedbranch.xhtml?tocCode=PROB&division=9.&title=&part=&chapter=&article=&nodetreepath=12';

  //var elink = document.getElementById("elink");
  //elink.onclick = function () {
  //    GoToPage(page1);
  //};
  //elink.onclick = GoToPage(yaya);
  //elink.onclick = GoToPage(yaya);
  //elink.onclick = function () {GoToPage(page1);};

  //document.write("Вы посещаете нас  <b>" + getCookie("style") + "-й</b> раз.")
  //document.write("Вы посещаете нас  <b>" + visits + "-й</b> раз." + " uniqs:" + uniqs)
}
"use strict";

function _defineProperty(t, e, i) {
    return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[e] = i, t
}

function asyncGeneratorStep(t, e, i, n, s, r, a) {
    try {
        var o = t[r](a),
            l = o.value
    } catch (t) {
        return void i(t)
    }
    o.done ? e(l) : Promise.resolve(l).then(n, s)
}

function _asyncToGenerator(o) {
    return function() {
        var t = this,
            a = arguments;
        return new Promise(function(e, i) {
            var n = o.apply(t, a);

            function s(t) {
                asyncGeneratorStep(n, e, i, s, r, "next", t)
            }

            function r(t) {
                asyncGeneratorStep(n, e, i, s, r, "throw", t)
            }
            s(void 0)
        })
    }
}! function(f) {
    var t;

    function i() {
        if ("" != pdf.apptype)
            for (var t, e, i, n, s, r = f("a"), a = 0; a < r.length; a++) - 1 === (e = (t = r[a]).href).indexOf("down.php?softid=") && -1 === e.indexOf("down?softid=") || (i = f.parseQuery(e), n = (s = i.softid) ? s = s.split("-")[0] + "-" + pdf.apptype : "", t.href = e.replace(/softid=[^=&?]*/, "softid=" + n))
    }

    function e() {
        var t = window.pdf.getAppType();
        t && (window.pdf.pdfEditorUrl = window.pdf.pdfEditorUrl.split("-")[0] + "-" + t, window.pdf.pdfConverterUrl = window.pdf.pdfConverterUrl.split("-")[0] + "-" + t)
    }

    function n() {
        var t = "";
        if (window.wx_hawkeye.wx_tracks && (t = window.wx_hawkeye.wx_tracks.apptype), t != pdf.getAppType() || t != pdf.apptype) return pdf.apptype = t, void e();
        e()
    }
    window.hasSubmitEmail = !1, window.pdf = {
        _events: {},
        on: function(t, e, i) {
            return e || console.warn('The "handler" must be specified!'), (this._events[t] || (this._events[t] = [])).push({
                handler: e,
                scope: i || null
            }), this
        },
        _pcType: ["mousedown", "mousemove", "mouseup"],
        _mType: ["touchstart", "touchmove", "touchend"],
        etype: function(t) {
            if (!window.$.env.isMobile) return t;
            var e = this._pcType.indexOf(t);
            return -1 !== e && this._mType[e] ? this._mType[e] : t
        },
        once: function(t, e, i) {
            return e || console.warn('The "handler" must be specified!'), (this._events[t] || (this._events[t] = [])).push({
                handler: e,
                scope: i || null,
                once: !0
            }), this
        },
        off: function(t, e, i) {
            var n = this._events[t];
            if (n)
                for (var s = n.length - 1; 0 <= s; s--) {
                    var r = n[s];
                    e && r.handler !== e || i && r.scope !== i || n.splice(s, 1)
                }
            return this
        },
        hasListener: function(t, e, i) {
            var n = this._events[t];
            if (!e) return n && 0 < n.length;
            if (n && e)
                for (var s = 0, r = n.length; s < r; s++) {
                    var a = n[s];
                    if (a.handler === e && (!i || a.scope === i)) return !0
                }
            return !1
        },
        trigger: function(t) {
            var e = this._events[t];
            if (e)
                for (var i = Array.from(arguments).slice(1), n = 0; n < e.length; n++) {
                    var s = e[n];
                    !0 === s.once && e.splice(n--, 1), s.handler.apply(s.scope, i)
                }
        },
        CDN_ROOT: "https://cdn.aoscdn.com/local/lightpdf.com",
        pdfEditorUrl: "https://download.aoscdn.com/down.php?softid=lightpdfeditor",
        pdfConverterUrl: "https://download.aoscdn.com/down.php?softid=pdfconverter-lightpdf",
        isLocalhost: function() {
            return location.hostname.endsWith("test")
        },
        acceptMap: {
            pdf: "application/pdf",
            doc: "application/msword",
            docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            ppt: "application/vnd.ms-powerpoint",
            pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            xls: "application/vnd.ms-excel",
            xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            png: "image/png",
            jpeg: "image/jpeg",
            gif: "image/gif",
            image: "image/*",
            txt: "text/plain",
            dxf: ".dxf",
            dwg: ".dwg"
        },
        getAPIURL: function(t) {
            return t.startsWith("https://") || t.startsWith("http://") || t.startsWith("//") ? t : this.isDev() ? "//gwdev.aoscdn.com/base/vip" + t : "//gw.aoscdn.com/base/vip" + t
        },
        getLoginURL: function() {
            var t = "https://gw.aoscdn.com/base/passport/v1/api/login";
            return this.isDev() && (t = "https://gwdev.aoscdn.com/base/passport/v1/api/login"), t
        },
        isDev: function() {
            return -1 < location.hostname.indexOf("dev-") && -1 < location.hostname.indexOf("aoscdn") || location.hostname.indexOf(".test") == location.hostname.length - 5
        },
        getPdfAPIURL: function(t) {
            return t.startsWith("https://") || t.startsWith("http://") || t.startsWith("//") ? t : this.isDev() ? "//gwdev.aoscdn.com/app/lightpdf" + t : "//gw.aoscdn.com/app/lightpdf" + t
        },
        get: function(t, e, i, n) {
            f.ajax({
                url: this.getAPIURL(t),
                type: "GET",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getStat: function(t, e, i, n) {
            f.ajax({
                url: this.getPdfAPIURL(t),
                type: "GET",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        resourceGet: function(t, e, i, n) {
            f.ajax({
                url: t,
                type: "GET",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        post: function(t, e, i, n, s) {
            f.ajax({
                url: this.getAPIURL(t),
                type: "POST",
                data: JSON.stringify(e),
                dataType: "JSON",
                processData: !1,
                contentType: "application/json;charset=utf-8",
                success: i.bind(s),
                error: n.bind(s)
            })
        },
        upload: function(t, e, i, n, s, r) {
            f.ajax({
                url: this.getAPIURL(t),
                type: "POST",
                data: e,
                dataType: "JSON",
                processData: !1,
                contentType: !1,
                xhr: function() {
                    var t = new XMLHttpRequest;
                    return t.upload.addEventListener("progress", s.bind(r), !1), t
                },
                success: i.bind(r),
                error: n.bind(r)
            })
        },
        delete: function(t, e, i, n) {
            f.ajax({
                url: this.getAPIURL(t),
                type: "DELETE",
                headers: {
                    Authorization: "Bearer " + pdf.getSession(),
                    "Cli-OS": "web"
                },
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getTasksWithToken: function(t, e, i, n, s) {
            f.ajax({
                url: this.getAPIURL(t),
                headers: {
                    Authorization: "Bearer " + e,
                    "Cli-OS": "web"
                },
                type: "GET",
                success: i.bind(s),
                error: n.bind(s)
            })
        },
        pdfsessionQuery: {
            callArr: [],
            isLoading: 0,
            getPdfSesstion: function(t, e, i) {
                var n = {
                    callback: t,
                    err: e,
                    scope: i
                };
                this.callArr.push(n), this.isLoading || (pdf.getPdfSesstion(this.sessionBack, this.sessionErr, this), this.isLoading = 1)
            },
            sessionBack: function(t) {
                if (this.callArr && 0 != this.callArr.length) {
                    for (var e, i = this.callArr.length - 1; 0 <= i; i--)(e = this.callArr[i]).callback.bind(e.scope)(t), this.callArr.splice(i, 1);
                    this.isLoading = 0
                }
            },
            sessionErr: function(t) {
                if (this.callArr && 0 != this.callArr.length) {
                    for (var e, i = this.callArr.length - 1; 0 <= i; i--)(e = this.callArr[i]).err.bind(e.scope)(t), this.callArr.splice(i, 1);
                    this.isLoading = 0
                }
            }
        },
        getPdfSesstion: function(e, t, i) {
            this.setSession(null);
            var n = this,
                s = {
                    device_hash: "xxxwebdevicehashxxxxxxxxxxxxxxxx",
                    os_version: 9,
                    os_name: "HONOR",
                    language: apower.lang,
                    type: 27,
                    app_id: apower.user.getAppId(),
                    platform: 2,
                    brand_id: 29
                };
            f.ajax({
                url: pdf.getLoginURL(),
                type: "POST",
                dataType: "JSON",
                data: s,
                success: function(t) {
                    n.setSession(t.data.api_token), e && e.bind(i)(t)
                },
                error: t.bind(i)
            })
        },
        sessionObj: null,
        getSession: function() {
            var t, e = null,
                i = null,
                n = Date.now(),
                i = f.store.get("api_token"),
                s = f.store.get("account_api_token");
            return !i && s && (pdf.setSession(s), i = f.store.get("api_token")), !i || -1 == i.indexOf(";date=") ? e : (t = i.split(";date=")[1], t = parseInt(t), Number.isNaN(t) || 828e5 < n - t || n - t < 0 ? e : e = f.store.get("account_api_token") || i.split(";date=")[0])
        },
        setSession: function(t) {
            var e = Date.now();
            if (null == t) return this.sessionObj = null, f.store.remove("api_token"), void this.trigger("session-updated");
            f.store.set("api_token", "".concat(t, ";date=").concat(e)), this.trigger("session-updated")
        },
        getUserId: function() {
            var t = this.getSession();
            return t ? t.split(",")[0] : ""
        },
        setSubscribeEmail: function(t) {
            var e = this.getUserId();
            t && e ? f.store.set("subscribe_email", "".concat(e, ";").concat(t)) : f.store.remove("subscribe_email")
        },
        getSubscribeEmail: function() {
            var t = this.getUserId(),
                e = f.store.get("subscribe_email"),
                i = "";
            return !t || !e || e.split(";")[0] != t ? i : i = e.split(";")[1]
        },
        getFileAuthorization: function(t, e, i, n) {
            var s = {
                    files: t.map(function(t) {
                        return "[object String]" === Object.prototype.toString.call(t) ? t : t.name
                    })
                },
                r = "https://gw.aoscdn.com/app/lightpdf/upload-auth";
            this.isDev() && (r = "https://gwdev.aoscdn.com/app/lightpdf/upload-auth"), f.ajax({
                url: r,
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "GET",
                data: JSON.stringify(s),
                dataType: "JSON",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        createTask: function(t, e, i, n) {
            f.ajax({
                url: this.getPdfAPIURL("/tasks"),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "POST",
                data: JSON.stringify(t),
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        createSubscribeTask: function(t, e, i, n) {
            f.ajax({
                url: this.getPdfAPIURL("/tasks"),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "PATCH",
                data: JSON.stringify(t),
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        createPackageTask: function(t, e, i, n) {
            f.ajax({
                url: "https://api-archive.aoscdn.com/api/tasks",
                headers: {
                    Authorization: "Bearer 58d3a2bf-af5e-3b4e-a7j5-f110922fd712",
                    "Cli-OS": "web"
                },
                type: "POST",
                data: t,
                processData: !1,
                contentType: !1,
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        downloadFilePost: function(t) {
            var i = this,
                n = this;
            return new Promise(function(e) {
                f.ajax({
                    url: i.getAPIURL("/file/downloads"),
                    headers: {
                        Authorization: "Bearer " + n.getSession(),
                        "Cli-OS": "web"
                    },
                    type: "POST",
                    data: JSON.stringify(t),
                    dataType: "JSON",
                    processData: !1,
                    contentType: "application/json",
                    success: function(t) {
                        e(t)
                    },
                    error: function(t) {
                        console.error(t)
                    }
                })
            })
        },
        modifyTask: function(t, e, i, n, s) {
            f.ajax({
                url: this.getPdfAPIURL("/tasks/" + t),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "PUT",
                data: JSON.stringify(e),
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: i.bind(s),
                error: n.bind(s)
            })
        },
        startTask: function(t, e, i, n, s) {
            var r = e ? JSON.stringify(e) : "";
            f.ajax({
                url: this.getPdfAPIURL("/tasks/" + t + "/process"),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "POST",
                data: r,
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: i.bind(s),
                error: n.bind(s)
            })
        },
        getTaskInfo: function(t, e, i, n) {
            var s = "?_t=" + Date.now();
            f.ajax({
                url: this.getPdfAPIURL("/tasks/" + t + s),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "GET",
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getPackageTaskInfo: function(t, e, i, n) {
            f.ajax({
                url: "https://api-archive.aoscdn.com/api/tasks/" + t,
                headers: {
                    Authorization: "Bearer 58d3a2bf-af5e-3b4e-a7j5-f110922fd712",
                    "Cli-OS": "web"
                },
                type: "GET",
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getPdfInfo: function(t, n, s) {
            if (t) {
                var r = {};
                if (r.password = t.password || "", t.url && (r.url = t.url), t.data && (r.data = t.data), t.file) {
                    var e = new FileReader;
                    return e.onload = function(t) {
                        var e = t.target.result,
                            i = new Uint8Array(e);
                        r.data = i, this.getPdfDocument(r, n, s)
                    }.bind(this), void e.readAsArrayBuffer(t.file)
                }(t.data || t.url) && this.getPdfDocument(r, n, s)
            }
        },
        getPdfDocument: function(e, i, n) {
            var s = {};
            PDFJS.getDocument(e).then(function(t) {
                s.pdf = t, s.password = e.password, i.bind(n)(s), t.getPage(1).then(function(t) {})
            }.bind(this), function(t) {
                s.err = t, s.errType = t.name, i.bind(n)(s)
            })
        },
        getWithAuthor: function(t, e, i, n, s) {
            f.ajax({
                url: this.getAPIURL(t),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "GET",
                data: e,
                success: i.bind(s),
                error: n.bind(s)
            })
        },
        postWithAuthor: function(t, e, i, n) {
            f.ajax({
                url: this.getAPIURL(t),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "POST",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getHeaders: function() {
            var t = {};
            return t.Authorization = "Bearer " + this.getSession(), t["Cli-OS"] = "web", t
        },
        getOcrVipInfo: function(t, e, i) {
            this.getWithAuthor("/client/activations", {
                device_hash: "xxxwebdevicehashxxxxxxxxxxxxxxxx",
                product_id: 213,
                platform: "web"
            }, t, e, i)
        },
        rawVipInfoMap: {},
        reqPool: [],
        getPoolItemBySession: function(t) {
            for (var e, i = [], n = this.reqPool.length - 1; 0 <= n; n--)(e = this.reqPool[n])._session == t && (this.reqPool.splice(n, 1), i.push(e));
            return i.reverse()
        },
        poolHasSesson: function(t) {
            for (var e = 0; e < this.reqPool.length; e++)
                if (this.reqPool[e]._session == t) return !0;
            return !1
        },
        clearVip: function() {
            this.rawVipInfoMap = {}, f.store.set("lightpdfVipInfo", !1), this.vipInfo.is_vip = !1, this.vipInfo.vip_expired_at = 0
        },
        getVipInfo: function(t, e, i) {
            var n = {
                    device_hash: "xxxwebdevicehashxxxxxxxxxxxxxxxx",
                    product_id: 227,
                    platform: "web"
                },
                s = this,
                r = pdf.getSession() || "-0-";
            if (this.rawVipInfoMap[r] && this.rawVipInfoMap[r]._t + 1500 > Date.now()) t.bind(i)(this.rawVipInfoMap[r]);
            else {
                var a = {
                    onsuccess: t,
                    onerror: e,
                    scope: i,
                    form: n,
                    _session: r
                };
                if (this.poolHasSesson(r)) return console.log("return pool"), void this.reqPool.push(a);
                this.reqPool.push(a), console.log("continue pool"), this.getWithAuthor("/client/activations", n, function(t) {
                    console.log("---", t), t._t = Date.now(), t.data ? s.setVipInfo(t.data.is_activated, t.data.expired_at) : s.setVipInfo(0, 0), s.rawVipInfoMap[r] = t;
                    for (var e, i = s.getPoolItemBySession(r), n = 0; n < i.length; n++)(e = i[n]).onsuccess.bind(e.scope)(t)
                }, function(t) {
                    console.log("-e-", t), t.status && 401 == t.status && s.setSession(null);
                    for (var e, i = s.getPoolItemBySession(r), n = 0; n < i.length; n++)(e = i[n]).onerror.bind(e.scope)(t)
                }, s)
            }
        },
        vipInfo: {
            is_vip: !1,
            vip_expired_at: 0
        },
        setVipInfo: function(t, e) {
            this.vipInfo.is_vip = t, this.vipInfo.vip_expired_at = e;
            var i = f.store.get("account_user");
            f.store.set("lightpdfVipInfo", this.vipInfo), i && f(".header-account-entry ").addClass("login"), f(".header-account-entry ").removeClass("lightpdf-vip"), f(".header-account-entry ").removeClass("lightpdf-expired-vip"), i && t ? f(".header-account-entry ").addClass("lightpdf-vip") : i && !t && e && f(".header-account-entry ").addClass("lightpdf-expired-vip"), this.trigger("vipInfoChange")
        },
        tracker: function(t) {
            if (t) {
                var e;
                for (var i in t) e = t[i], "".concat(i, "=").concat(e, "&")
            }
        },
        trackArg: function(t, e, i, n, s) {
            var r = {};
            return r.taskid = t, r.stage = e, r.status = i, n && (r.user_agent = encodeURIComponent(window.navigator.userAgent)), s && (r.err_obj = encodeURIComponent(s.toString())), r
        },
        trackOk: function() {},
        trackErr: function() {},
        getUrlParam: function(t, e) {
            var i = new RegExp("(^|&)" + e + "=([^&]*)(&|$)");
            if (!t || -1 == t.indexOf("?")) return null;
            var n = t.substring(t.indexOf("?") + 1).match(i);
            return null != n ? n[2] : null
        },
        isVipLink: function() {
            return !0
        },
        isOcrLink: function() {
            return !0
        },
        updateUserToken: function() {
            var t = this.getUrlParams(),
                e = f.store.get("account_id_token");
            t.user_token = e;
            var i = "?";
            for (var n in t) i = i + n + "=" + t[n] + "&";
            i = i.substring(0, i.length - 1), window.history.pushState({
                status: 0
            }, "", i)
        },
        getUrlParams: function() {
            for (var t, e = window.location.search, i = e ? e.substring(1) : "", n = i.length ? i.split("&") : [], s = n.length, r = {}, a = 0; a < s; a++) t = n[a].split("="), r[decodeURIComponent(t[0])] = decodeURIComponent(t[1]);
            return r
        },
        getAppType: function() {
            var t = "",
                e = f.parseQuery(location.href);
            return e.apptype && (t = e.apptype), t || this.apptype
        },
        apptype: "",
        getVipActivity: function(t, e, i) {
            this.postWithAuthor("/activities/ncp", t, e, i)
        },
        getTranscodeInfo: function(t, e, i, n) {
            f.ajax({
                url: this.getAPIURL("/files/new/" + t),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "GET",
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        getApiKey: function(t, e, i, n) {
            var s = t ? JSON.stringify(t) : "";
            f.ajax({
                url: this.getAPIURL("/clients"),
                headers: {
                    Authorization: "Bearer " + this.getSession(),
                    "Cli-OS": "web"
                },
                type: "POST",
                data: s,
                dataType: "json",
                processData: !1,
                contentType: "application/json",
                success: e.bind(n),
                error: i.bind(n)
            })
        },
        statApp: function(t, e) {
            var i, n = "".concat("https://wxhk-server.cn-hongkong.log.aliyuncs.com/logstores/api-lightpdf-com/track?APIVersion=0.6.0", "&id=").concat(t);
            if (e)
                for (var s in e) {
                    e.hasOwnProperty(s) && (i = e[s], n += "&".concat(s, "=").concat(i))
                }
            f.ajax({
                url: n,
                type: "GET",
                crossDomain: !0,
                success: function() {},
                error: function() {}
            })
        }
    }, e(), window.wx_hawkeye && (n(), i()), window.addEventListener("wx_hawkeye_ready", function(t) {
        var e = "";
        window.wx_hawkeye.wx_tracks && (e = window.wx_hawkeye.wx_tracks.apptype), e != pdf.getAppType() && (n(), i(), pdf.trigger("apptype-update"))
    }), window.pdfAccount = {
        getVipInfo: function() {
            return _asyncToGenerator(regeneratorRuntime.mark(function t() {
                var e, i, n, s, r;
                return regeneratorRuntime.wrap(function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = {
                                device_hash: "xxxwebdevicehashxxxxxxxxxxxxxxxx",
                                product_id: 227,
                                platform: "web"
                            }, t.next = 3, pdfPost("/client/activations", {
                                type: "GET",
                                headers: pdf.getHeaders(),
                                post: e
                            });
                        case 3:
                            i = t.sent, i.ok, n = i.data, r = s = 0, n.data && (s = n.data.is_activated, r = n.data.expired_at), pdf.setVipInfo(s, r);
                        case 10:
                        case "end":
                            return t.stop()
                    }
                }, t)
            }))()
        }
    }, window.pdfPost = f.req.overwrite(function(t, e) {
        var i = apower;
        i.lang, i.user;
        return t = pdf.getAPIURL(t), e.data = e.post || {}, e.headers || (e.headers = {
            Authorization: "Bearer " + pdf.getSession(),
            "Cli-OS": "web"
        }), e.method = e.type, {
            url: t,
            options: e
        }
    }, function() {
        var i = _asyncToGenerator(regeneratorRuntime.mark(function t(e, i) {
            var n, s, r;
            return regeneratorRuntime.wrap(function(t) {
                for (;;) switch (t.prev = t.next) {
                    case 0:
                        if (n = e.ok, s = e.data, r = s && s.error_code ? s.error_code : null, n = n && s && 1 == s.status, s = s && s.data ? s.data : s, -99 == r) return t.next = 7, apower.user.popupLoginWin();
                        t.next = 8;
                        break;
                    case 7:
                        return t.abrupt("return", pdfPost(i));
                    case 8:
                        return t.abrupt("return", {
                            ok: n,
                            data: s,
                            status: r
                        });
                    case 9:
                    case "end":
                        return t.stop()
                }
            }, t)
        }));
        return function(t, e) {
            return i.apply(this, arguments)
        }
    }()), window.ossUploader = function(t, e, i, n, s, u, r) {
        function a(t, e, i, n, s, r, a) {
            this.attachment = a, this.file = t, this.authorizefun = e, this.successfun = i, this.errorfun = n, this.progressfun = s, this.scope = r, this._id = -1
        }
        return a.prototype = {
            fileAuthorizeSuccess: function(t) {
                pdf.tracker(pdf.trackArg(u.taskID, "authentications", 1)), this.startTime = Date.now(), this.uploadToOss(t, this.file), this.authorizefun && this.authorizefun.bind(this.scope)()
            },
            fileAuthorizeError: function(t) {
                pdf.tracker(pdf.trackArg(u.taskID, "authentications", 0, 0, t)), this.errorfun.bind(this.scope)(t)
            },
            uploadToOss: function(t, e) {
                var i = this,
                    n = t.data,
                    s = (n.expires_in, n.callback),
                    r = {
                        region: n.region_id,
                        accessKeyId: n.access_id,
                        accessKeySecret: n.access_secret,
                        bucket: n.bucket,
                        secure: !0,
                        stsToken: n.security_token,
                        endpoint: n.endpoint
                    },
                    a = new OSS(r),
                    o = this.progressfun ? this.progressfun.bind(this.scope) : null,
                    l = (Date.parse(new Date), n.path.resources),
                    c = ""; - 1 < e.name.indexOf(".") && e.name.indexOf(".") < e.name.length - 1 && (c = e.name.replace(/.*\./, "."));
                var d = l + f.md5(e.name + Date.now() + "") + c,
                    p = {
                        url: s.callbackUrl,
                        body: "".concat(s.callbackBody, "&x:original_name=").concat(e.name.replace(/\$/g, ""))
                    },
                    h = "";
                this.attachment && (h = 'attachment;filename="' + encodeURIComponent(e.name) + '"'), a.multipartUpload(d, e, {
                    cancelFlag: !0,
                    callback: p,
                    progress: function(t) {
                        o && o(t, i.file.size, i._id)
                    },
                    headers: {
                        "Content-Disposition": h
                    }
                }).then(this.uploadOssOk.bind(this)).catch(function(t) {
                    pdf.tracker(pdf.trackArg(u.taskID, "ossUpload", 0, 0, t)), this.errorfun.bind(this.scope)(t)
                }.bind(this))
            },
            uploadOssOk: function(t) {
                this.endTime = Date.now();
                var e = t.data;
                e && 1 == e.status && this.sendTracker(), this.fillResWithResource(t), this.successfun.bind(this.scope)(t, this.file, this._id)
            },
            sendTracker: function() {
                var t, e, i = this.endTime - this.startTime;
                this.file && (t = this.file.size, e = "", navigator && navigator.language && (e = navigator.language), pdf.get("https://wx-user-behavior.cn-hongkong.log.aliyuncs.com/logstores/lightpdf-web/track?APIVersion=0.6.0&size=".concat(t, "&millisecond=").concat(i, "&lang=").concat(apower.lang, "&navigator=").concat(e), this.trackerOk, this.trackerErr, this))
            },
            trackerOk: function() {},
            trackerErr: function() {},
            fillResWithResource: function(t) {
                var e = t.data;
                return e.data && e.data && !e.data.resources && e.data.id && e.data.url && (e.data.resource = {
                    resource_id: e.data.id,
                    url: e.data.url
                }, delete e.data.id, delete e.data.url), t
            },
            start: function() {
                this.file && pdf.getFileAuthorization([this.file], this.fileAuthorizeSuccess, this.fileAuthorizeError, this)
            }
        }, new a(t, e, i, n, s, u, r)
    };
    var a = {
        __timeId: 0,
        __currentTime: 0,
        timerArr: [],
        totalTimer: -1,
        setCurrentTime: function() {
            this.__currentTime = Date.now()
        },
        instance: function() {
            return this
        },
        timer: function(t, e, i) {
            return {
                id: this.__timeId++,
                fun: t.bind(i),
                time: e,
                timestamp: Date.now()
            }
        },
        init: function() {
            -1 == this.totalTimer && (this.totalTimer = setInterval(this.timerFun.bind(this), 500))
        },
        timerFun: function() {
            var t;
            this.setCurrentTime();
            for (var e = this.timerArr.length - 1; 0 <= e; e--)(t = this.timerArr[e]) && this.__currentTime - t.timestamp >= t.time && (t.fun(), t.timestamp = this.__currentTime)
        },
        addTimer: function(t) {
            this.timerArr.push(t)
        },
        delTimer: function(t) {
            for (var e, i = this.timerArr.length - 1; 0 <= i; i--)(e = this.timerArr[i]) && e.id == t && this.timerArr.splice(i, 1)
        }
    };
    (window.TimeManager = a).init(), f.registerComponent("select-file", {
        input: null,
        init: function() {
            this.input.$on("dragenter", this.onDragEnter, this), this.input.$on("dragleave", this.onDragLeave, this), this.input.$on("dragover", this.onDragOver, this), this.input.$on("drop", this.onDrop, this), this.input.$on("change", this.onFileChange, this)
        },
        onDragEnter: function() {
            this.el.addClass("dragging-in")
        },
        onDragLeave: function(t) {
            t.preventDefault(), this.el.removeClass("dragging-in")
        },
        onDragOver: function(t) {
            t.preventDefault()
        },
        onDrop: function(t) {
            t.preventDefault(), this.el.removeClass("dragging-in"), this.onSelectFile(t.dataTransfer.files[0])
        },
        onFileChange: function(t) {
            this.onSelectFile(t.target.files[0]), t.target.value = ""
        },
        onSelectFile: function() {}
    }), f.registerComponent("pdf-msg", {
        template: '\n\t\t<div class="pdf-msg"></div>\n\t',
        type: "",
        showMessage: function(t, e) {
            this.type && this.el.removeClass(this.type + "-msg"), this.type = t, this.el.addClass(t + "-msg"), this.el.html(e)
        },
        alert: function(t) {
            this.showMessage("alert", t)
        },
        error: function(t) {
            this.showMessage("error", t)
        },
        success: function(t) {
            this.showMessage("success", t)
        },
        loading: function(t) {
            this.showMessage("loading", t)
        }
    }), f.getComponent("color-select").prototype.template = '\n\t<div class="drop drop-select color-select">\n\t\t<div class="color-select-preview" :style.background-color="value"></div>\n\t\t<div class="drop-menu color-select-menu" :class="menuClass" ref="menu">\n\t\t\t<div class="ap-trangle"></div>\n\t\t\t<ul>\n\t\t\t\t<li f-for="color of data" @mousedown="selectValue(color)" :class.active="value == color" :style.background-color="color"></li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n', f.registerComponent("stroke-select", "drop-select", {
        template: '\n\t\t<div class="drop stroke-select">\n\t\t\t<div class="stroke-select-preview">\n\t\t\t\t<div class="stroke-select-line" :style.height.px="value"></div>\n\t\t\t\t<div class="stroke-select-text">{{value}}px</div>\n\t\t\t</div>\n\t\t\t<div class="drop-menu drop-select-menu" :class="menuClass" ref="menu">\n\t\t\t\t<ul>\n\t\t\t\t\t<li f-for="item of data"\n\t\t\t\t\t\t@click="selectValue(item)"\n\t\t\t\t\t\t:class.active="value == item"\n\t\t\t\t\t>\n\t\t\t\t\t\t<div class="stroke-select-line" :style.height.px="item"></div>\t\t\t\t\t\t<div class="stroke-select-text">{{item}}px</div>\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t',
        value: 4,
        data: [2, 4, 6, 8, 10, 16, 20]
    }), f.registerComponent("font-family-select", "drop-select", {
        template: '\n\t\t<div class="drop font-family-select drop-select" :style.font-family="value">\n\t\t\t<slot>{{value}}</slot>\n\t\t\t<div class="drop-menu drop-select-menu" :class="menuClass" ref="menu">\n\t\t\t\t<ul>\n\t\t\t\t\t<li f-for="item of data"\n\t\t\t\t\t\t@click="selectValue(item)"\n\t\t\t\t\t\t:class.active="value == item"\n\t\t\t\t\t\t:style.font-family="item"\n\t\t\t\t\t>{{item}}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t',
        value: "Arial",
        data: ["Arial", "Arial Black", "Arial Narrow", "Book Antiqua", "Brush Script MT", "Calibri", "Cambria", "Candara", "Century Gothic", "Consolas", "Courier New", "Franklin Gothic Medium", "Garamond", "Georgia", "Impact", "Lucida Bright", "Lucida Console", "Segoe UI", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"]
    }), f.register("qrcode-base", {
        onReady: function() {
            if ("zh" === apower.lang) {
                if (console.log("ç»„ä»¶æ³¨å†Œ"), "pdf-to-word" === this.taskName || "ocr" === this.taskName) return !1;
                0 === f(".btn-panel.wechat").length && this.tryDesktopBtn && (f(".drop-area-btns").append('<a class="drop-area-button upload-panel btn-panel wechat" thin>&#12288å…³æ³¨å…¬ä¼—å·&#12288</a>'), f(".drop-area-btns").append('<a class="wechat-qrcode"><span class="wx-bg"></span><span class="attention">å…³æ³¨â€œè½»é—ªPDFâ€å…¬ä¼—å·</span></a>'), f(".btn-panel.wechat").on("mouseover", this.showQrCode), f(".btn-panel.wechat").on("mouseout", this.hideQrCode), f(".btn-panel.wechat").on("touchstart", this.switchQrCode))
            }
        },
        showQrCode: function() {
            f(".wechat-qrcode").addClass("wx-block")
        },
        hideQrCode: function() {
            f(".wechat-qrcode").removeClass("wx-block")
        },
        switchQrCode: function() {
            -1 < f(".wechat-qrcode").attr("class").indexOf("wx-block") ? f(".wechat-qrcode").removeClass("wx-block") : f(".wechat-qrcode").addClass("wx-block")
        }
    }), f(".wechat-merge").on("mouseover", function() {
        "zh" === apower.lang && f(".wechat-qrcode").addClass("wx-block")
    }), f(".wechat-merge").on("mouseout", function() {
        "zh" === apower.lang && f(".wechat-qrcode").removeClass("wx-block")
    }), f(".wechat-merge").on("touchstart", function() {
        "zh" === apower.lang && (-1 < f(".wechat-qrcode").attr("class").indexOf("wx-block") ? f(".wechat-qrcode").removeClass("wx-block") : f(".wechat-qrcode").addClass("wx-block"))
    }), f.registerComponent("base-upload-convert", ["select-file", "qrcode-base"], {
        template: '\n\t\t<div class="drop-area wait-upload" draggable="false">\n\t\t\t<div ref="msgTab" class="drop-area-msgs">\n\t\t\t\t<pdf-msg ref="msg"></pdf-msg>\n\t\t\t\t<div ref="startOverTab" class="start-over" style="display:none">\n\t\t\t\t\t<div class="start-over-button" @click="startOver">Start over@@000822</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div ref="operationTab" class="drop-area-operation" upload-file-type>\n\t\t\t\t<div ref="selectFileTab" class="upload-box">\n\t\t\t\t\t<div class="drop-area-button add-icon" wide></div>\n\t\t\t\t\t<div class="add-des">Choose File@@000821</div>\n\t\t\t\t\t<div class="drag-here" ref="dragHereBtn" hidden>{{dropHereLabel | trans}}</div>\n\t\t\t\t\t<input type="file" accept="" draggable="false" class="file-input select-pdf-input" ref="input" title="">\n\t\t\t\t</div>\n\n\t\t\t\t<div ref="loadingInfoTab" class="file-icon-container">\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class="file-icon">\n\t\t\t\t\t\t<div class="icon-mask">\n\t\t\t\t\t\t\t<div class="loading-bar"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="point-to"></div>\n\t\t\t\t\t<div class="source-file"></div>\n\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div class="file-name" ref="fileNameEl"></div>\n\n\t\t\t\t\t<div class="join-vip" ref="buyVipTip" hidden @click="toJoinVip">Become VIP membership to enjoy priority conversion service @@001895</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="subscribe" ref="subscribe">\n\t\t\t\t\t<div class="checkbox" :class.active="subscribeChecked" @click="onClickSubscribe">\n\t\t\t\t\t\t<div class="checkbox-icon">\n\t\t\t\t\t\t\t<icon type="checkbox"></icon>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="checkbox-label">\n\t\t\t\t\t\tSubscribe to our newsletter. Email processed file to:@@001911\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="email">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="email" class="email-input" @input="changeInput" ref="emailInput">\n\t\t\t\t\t\t\t<p :class.active="showValidatorMsg">Please input a valid email address!@@invalid_email</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="email-submit drop-area-button" thin disabled ref="emailSubmit" @click="onClickEmailSubmit">Submit@@000823</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t\t<div ref="msgDown" class="msg-down-container">\n\t\t\t\t\t<div class="msg-down" ref="msgDownEl"></div>\n\t\t\t\t</div>\n\n\t\t\t\t<div ref="passwordTab">\n\t\t\t\t\t<div class="password-input-list" ref="passwordInputList"><input type="password" class="password-input" ref="passwordEl"></div>\n\t\t\t\t\t<div class="drop-area-button submit-button" wide @click="submitPassword">Submit@@000823</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div ref="convertFailedTab">\n\t\t\t\t\t<div class="download-or-start-over">\n\t\t\t\t\t\t<a class="drop-area-button" thin id="pagedownload4" href="{pdfeditorUrl}">Try Desktop@@000824</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="convert-success-download" ref="convertSuccessTab">\n\t\t\t\t\t<div class="download-file">\n\t\t\t\t\t\t<div class="download-file-left">\n\t\t\t\t\t\t\t<div class="download-file-name" ref="downloadFileNameEl"></div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="download-file-right">\n\t\t\t\t\t\t\t<a class="download-file-link edit-link" ref="editLink" href="{{window.apower.getRegionPath()}}/edit-pdf" hidden></a>\n\t\t\t\t\t\t\t<a class="download-file-link" ref="downloadLink" download href=""></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="download-or-start-over">\n\t\t\t\t\t\t<a class="drop-area-button" ref="desktopApp"  thin id="pagedownload2" href="{pdfeditorUrl}">Try Desktop@@000824</a>\n\t\t\t\t\t\t<div class="join-vip" ref="buyVipTip1" hidden @click="toJoinVip">Become VIP membership to enjoy priority conversion service @@001895</div>\n\t\t\t\t\t\t<div class="drop-area-button" style="display:none" thin @click="startOver">Start over@@000822</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="drop-area-btns" ref="tryDesktopBtn">\n\t\t\t\t<a class="drop-area-button upload-panel" ref="tryDesktopBtnAlink" thin id="pagedownload3" href="{pdfeditorUrl}" f-if="taskName !== \'pdf-to-word\' && taskName !== \'ocr\'">Try Desktop@@000824</a>\n\t\t\t</div>\n\t\t</div>\n\t',
        pdfeditorUrl: pdf.pdfEditorUrl,
        maxSize: 1932735283.2,
        dropHereLabel: "Drop PDF here@@000826",
        convertingLabel: "",
        convertSuccessLabel: "",
        convertFailedLabel: "",
        taskName: "",
        fileTypes: [],
        currentFile: null,
        taskID: "",
        protected: !1,
        fileName: "",
        fileId: "",
        pdfData: null,
        ossData: null,
        statusCodeObj: (_defineProperty(t = {
            "-99": "Unknown"
        }, "-99", "NoTemplate"), _defineProperty(t, "-98", "resultErr"), _defineProperty(t, "-97", "AliUploadErr"), _defineProperty(t, "-96", "AliDownloadErr"), _defineProperty(t, "-95", "ZipErr"), _defineProperty(t, "-1", "InvalidAction"), _defineProperty(t, "-2", "InvalidLicense"), _defineProperty(t, "-3", "InvalidPassword"), _defineProperty(t, "-4", "InvalidFileFormat"), _defineProperty(t, "-5", "InvalidInputFile"), _defineProperty(t, "-6", "InvalidTaskFile"), _defineProperty(t, "0", "Failed"), _defineProperty(t, "1", "Success"), t),
        joinPdfVip: null,
        vipSize: 5,
        subscribeChecked: !0,
        tempEmail: "",
        showValidatorMsg: !1,
        init: function() {
            this.callSuper("select-file"), pdf.on("apptype-update", this.onApptypeUpdate, this), f.env.isMobile && (this.pdfeditorUrl = pdf.pdfConverterUrl);
            var t = this.fileTypes.map(function(t) {
                return pdf.acceptMap[t]
            }).join(",");
            this.input.attr("accept", t), this.initPDFJS();
            var e, i, n, s, r = f.parseParams(location.search);
            r.fileId && r.fileName && (i = (e = location.pathname).lastIndexOf("/"), this.taskName = e.substring(i + 1, e.length), "pdf-to-jpg" !== this.taskName && "pdf-to-png" !== this.taskName || (this.taskName = "pdf-to-image"), "annotate-pdf" === this.taskName && (this.taskName = "edit-pdf"), this.fileId = r.fileId, this.tryDesktopBtn.hide(), f(".drop-area").css("background", "#FFFFFF"), f(".try-desktop-btn").hide(), this.el.removeClass("wait-upload"), "edit-pdf" != this.taskName ? ((n = {}).fileId = this.fileId, n.name = decodeURIComponent(decodeURIComponent(r.fileName)), this.convertList = f.newComponent("file-list", {
                taskName: this.taskName,
                imageType: this.imageType,
                parent: this
            }), this.convertList.on("clearAll", this.onClearAll, this), this.operationTab.append(this.convertList.el), this.convertList.el.show().siblings().hide(), this.input.hide(), s = this.convertList.getNewItem(n), this.convertList.itemInstanceArr.push(s), this.convertList.listMid.append(s.el), this.convertList.startConvertFileList()) : (pdf.getTranscodeInfo(r.fileId, this.getPdfUrlOk.bind(this), this.getPdfUrlErr, this), this.fileName = decodeURIComponent(decodeURIComponent(r.fileName)), this.loadingInfoTab.show().siblings().hide()))
        },
        getPdfUrlOk: function(t) {
            this.trigger("get-onlinePdfUrl", t.data.url), this.convertFile()
        },
        getPdfUrlErr: function() {
            f(".placeholder-block").hide(), f(".drop-area").css("display", "flex"), this.loadingInfoTab.hide().siblings().show()
        },
        onApptypeUpdate: function() {
            this.updateDownloadUrl()
        },
        updateDownloadUrl: function() {
            this.convertFailedTab && (this.convertFailedTab.find("a").href = this.pdfeditorUrl), this.tryDesktopBtnAlink && (this.tryDesktopBtnAlink.href = this.pdfeditorUrl)
        },
        onClickSubscribe: function() {
            this.subscribeChecked = !this.subscribeChecked, this.subscribe.find(".email-submit").attr("disabled", !this.subscribeChecked)
        },
        isEmailSubmiting: 0,
        changeInput: function() {
            this.showValidatorMsg = !1
        },
        onClickEmailSubmit: function() {
            var t;
            this.isEmailSubmiting || this.subscribeChecked && (t = "", t = this.emailInput.val(), this.validateEmail(t) ? (window.hasSubmitEmail = !0, pdf.statApp("record_email_task_num", {
                action: "è®°å½•é‚®ç®±æŽ¥æ”¶çš„ä»»åŠ¡æ•°",
                function: this.taskName,
                task_num: 1,
                time: Date.now()
            }), this.submitEmail(t)) : this.showValidatorMsg = !0)
        },
        validateEmail: function(t) {
            return /^[\w-\+]+(?:\.[\w-\+]+)*@[\w-\+]+(?:\.[\w-\+]+)+$/.test(t.trim())
        },
        submitEmail: function(t) {
            this.isEmailSubmiting = 1;
            var e = [this.taskID],
                i = {
                    task_ids: JSON.stringify(e),
                    email: t
                };
            this.tempEmail = t, pdf.createSubscribeTask(i, this.onSubscribeTaskCreated, this.onSubscribeTaskCreateFailed, this)
        },
        onSubscribeTaskCreated: function(t) {
            1 == t.status ? (pdf.setSubscribeEmail(this.tempEmail), f.newComponent("subscribe-success").show(), this.isEmailSubmiting = !1) : this.onSubscribeTaskCreateFailed()
        },
        onSubscribeTaskCreateFailed: function() {
            this.isEmailSubmiting = 0, window.hasSubmitEmail = 0
        },
        modifyEmailOk: function() {
            this.isEmailSubmiting = 0, this.subscribe.hide(), pdf.setSubscribeEmail(this.tempEmail), f.newComponent("subscribe-success").show()
        },
        modifyEmailErr: function() {
            this.isEmailSubmiting = 0, console.log("errrr"), window.hasSubmitEmail = !1
        },
        initPDFJS: function() {
            try {
                window.hasOwnProperty("PDFJS") && (PDFJS.workerSrc = pdf.CDN_ROOT + "/pdfjs/js/pdf.worker.js", PDFJS.cMapUrl = pdf.CDN_ROOT + "/pdfjs/cmaps/", PDFJS.cMapPacked = !0)
            } catch (t) {
                console.log(t)
            }
        },
        onReady: function() {
            f(".placeholder-block").hide(), f(".drop-area").css("display", "flex");
            var t = f.parseParams(location.search);
            t.fileId && t.fileName && "edit-pdf" === this.taskName ? f(".drop-area").css("background", "#FFFFFF") : f(".drop-area").css("background", "none")
        },
        onLogout: function() {
            pdf.setSession(null)
        },
        onLogined: function() {
            this.getVipInfo()
        },
        getVipInfo: function() {
            pdf.getVipInfo(this.vipInfoFun, this.vipInfoErr, this)
        },
        vipInfoFun: function(t) {
            this.is_vip = 0, this.vip_expired_at = 0, t.data && (this.is_vip = t.data.is_activated, this.vip_expired_at = t.data.expired_at), pdf.setVipInfo(this.is_vip, this.vip_expired_at)
        },
        vipInfoErr: function() {
            this.is_vip = 0, this.vip_expired_at = 0
        },
        onSelectFile: function(t) {
            if (t)
                if (t.size > this.maxSize) this.showErrorMessage(apower.tr("Cannot upload files larger than {0}!@@000830", f.formatSize(this.maxSize)));
                else {
                    if (!pdf.vipInfo.is_vip && 5242880 < t.size) return this.joinPdfVip = f.newComponent("join-pdf-vip"), this.joinPdfVip.show(), this.joinPdfVip.on("reset", this.resetUpload.bind(this)), !1;
                    var e = t.name.select(/\.(\w+)$/, 1).toLowerCase();
                    this.tryDesktopBtn.hide(), f(".drop-area").css("background", "#FFFFFF"), f(".try-desktop-btn").hide(), this.operationTab.attr("upload-file-type", e), this.el.removeClass("wait-upload"), this.prepareUploadingFile(t)
                }
        },
        showErrorMessage: function(t) {
            this.msg.error(t), this.msg.el.show().siblings().hide()
        },
        showAlertMessage: function(t) {
            this.msg.alert(t), this.msg.el.show().siblings().hide()
        },
        showSuccessMessage: function(t) {
            this.msg.success(t), this.msg.el.show().siblings().hide()
        },
        showLoadingMessage: function(t) {
            this.msg.loading(t), this.msg.el.show().siblings().hide()
        },
        loadBarProgress: function(t) {
            var e = 5 - t / 100 * 50;
            this.loadingInfoTab.show().find(".loading-bar").css("top", e + "px")
        },
        toJoinVip: function() {
            pdf.vipInfo.is_vip || (pdf.isVipLink() ? window.open(this.rootslash() + "/buy-vip") : f.newComponent("buy-pdf-vip-store").show())
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        prepareUploadingFile: function(t) {
            window.scroll(0, 0), this.currentFile = t, this.showLoadingMessage(apower.tr("Uploading...@@000829") + " 0%"), this.buyVipTip.hide(), this.loadingInfoTab.show().siblings().hide(), this.loadingInfoTab.removeClass("converting"), this.input.hide(), this.fileNameEl.text(t.name), this.loadBarProgress(0), this.uploadingProgress(4), /\.pdf$/i.test(this.currentFile.name) ? this.checkVipStatus() : this.uploadFile(this.authorizeProgress)
        },
        createTask: function() {
            var t = "pdf-to-word" === this.taskName ? (console.log("1 pdf-to-word createTask"), {
                service_type: this.taskName,
                files: [{
                    file_id: this.file.fileId,
                    password: this.file.password
                }],
                autostart: 1
            }) : {
                service_type: this.taskName
            };
            pdf.createTask(t, this.onTaskCreated, this.onTaskCreateFailed, this)
        },
        onTaskCreated: function(t) {
            this.taskID = t.data.task_id, pdf.tracker(pdf.trackArg(this.taskID, "createtask", 1, 1)), this.convertFile()
        },
        tempTime: null,
        checkVipStatus: function() {
            pdf.getVipInfo(this.getVipInfosSuccess, this.getVipInfoErr, this)
        },
        getVipInfosSuccess: function(t) {
            this.is_vip = 0, this.vip_expired_at = 0, t.data && (this.is_vip = t.data.is_activated, this.vip_expired_at = t.data.expired_at), pdf.setVipInfo(this.is_vip, this.vip_expired_at), this.getPdfInfo()
        },
        getVipInfoErr: function() {
            this.is_vip = 0, this.vip_expired_at = 0, this.getPdfInfo()
        },
        getPdfInfo: function() {
            if (this.tempTime = new Date, this.tryDesktopBtn.hide(), f(".drop-area").css("background", "#FFFFFF"), f(".try-desktop-btn").hide(), !pdf.vipInfo.is_vip && this.currentFile.size > 1048576 * this.vipSize) return this.joinPdfVip = f.newComponent("join-pdf-vip"), this.joinPdfVip.show(), void this.joinPdfVip.on("reset", this.resetUpload.bind(this));
            pdf.getPdfInfo({
                password: this.getPassword(),
                file: this.currentFile
            }, this.pdfInfoBack, this)
        },
        resetUpload: function() {
            this.currentFile = null, this.protected = !1, this.el.find("drop-area").addClass("wait-upload"), this.input.show(), this.tryDesktopBtn.hide(), f(".drop-area").css("background", "none"), f(".try-desktop-btn").show(), this.msg.el.hide(), this.startOverTab.hide(), this.selectFileTab.show().siblings().hide(), this.passwordEl.val("")
        },
        pdfInfoBack: function(t) {
            this.uploadingProgress(8), "PasswordException" != t.errType ? "InvalidPDFException" == t.errType || t.err ? this.onUploadFailed() : (this.pdfData = t.pdf, this.loadingInfoTab.show().siblings().hide(), this.loadingInfoTab.removeClass("converting"), this.uploadFile(this.authorizeProgress)) : this.onNeedPassword()
        },
        onTaskCreateFailed: function(t) {
            this.showErrorMessage(apower.tr("Failed to upload your file!@@000830")), this.startOverTab.show().siblings().hide(), pdf.tracker(pdf.trackArg(0, "createtask", 0, 1, t))
        },
        startOver: function() {
            this.currentFile = null, this.protected = !1, this.el.find("drop-area").addClass("wait-upload"), this.input.show(), "pdf-to-word" !== this.taskName && "ocr" !== this.taskName && this.tryDesktopBtn.show(), f(".drop-area").css("background", "none"), f(".try-desktop-btn").show(), this.msg.el.hide(), this.startOverTab.hide(), this.selectFileTab.show().siblings().hide(), this.passwordEl.val(""), this.buyVipTip.hide(), this.onStartOver(), this.trigger("startover"), this.input[0].click()
        },
        onStartOver: function() {},
        uploadFile: function(t) {
            this.is_vip, ossUploader(this.currentFile, t, this.uploadOssOk, this.fileOssError, this.returnProgress, this, 1).start()
        },
        authorizeProgress: function() {
            this.uploadingProgress(10)
        },
        fileOssError: function(t) {
            t && t.responseJSON && t.responseJSON.status < 0 && pdf.getPdfSesstion(this.reloadSessionOk, this.reloadSessionErr, this)
        },
        reloadSessionOk: function() {
            this.token = pdf.getSession(), this.uploadFile(this.authorizeProgress)
        },
        reloadSessionErr: function(t) {
            t && 400 == t.status && (this.showErrorMessage("Invalid token, please login in again."), this.trigger("logout"))
        },
        uploadOssOk: function(t) {
            var e = t.data;
            1 == e.status ? (pdf.tracker(pdf.trackArg(this.taskID, "ossUpload", 1)), e.data.app_data ? this.fileId = e.data.app_data.id : this.fileId = e.data.resource.resource_id, this.onAfterUploadMainFile(), this.fileNameEl.text("")) : (pdf.tracker(pdf.trackArg(this.taskID, "ossUpload", 0, 0, JSON.stringify(e))), this.onUploadFailed())
        },
        create32Number: function() {
            for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < 32; i++) t += e.charAt(Math.floor(Math.random() * e.length));
            return t
        },
        returnProgress: function(t) {
            var e;
            0 <= t && (e = Math.floor(10 + 90 * t), this.uploadingProgress(e))
        },
        uploadingProgress: function(t) {
            this.showLoadingMessage(apower.tr("Uploading...@@000829") + " " + t + "%"), this.loadBarProgress(t)
        },
        onUploadSuccess: function(t) {
            1 === t.status ? (this.fileName = t.file_name, this.protected = t.protected, this.onAfterUploadMainFile(), this.fileNameEl.text("")) : this.onUploadFailed()
        },
        onUploadFailed: function() {
            this.showErrorMessage(apower.tr("Failed to upload your file!@@000830")), this.startOverTab.show().siblings().hide()
        },
        onUploadProgress: function(t) {
            var e;
            t.lengthComputable && (e = Math.floor(t.loaded / t.total * 100), this.showLoadingMessage(apower.tr("Uploading...@@000829") + " " + e + "%"), this.loadBarProgress(e))
        },
        onAfterUploadMainFile: function() {
            this.createTask()
        },
        convertFile: function() {
            this.onBeforeConvertFile(), this.showLoadingMessage(apower.tr(this.convertingLabel)), this.loadingInfoTab.show().siblings().hide(), this.loadingInfoTab.addClass("converting");
            var t = this.getConvertPostData();
            this.showSubscribe(), pdf.modifyTask(this.taskID, t, this.modifySuccess.bind(this), this.modifyError)
        },
        showSubscribe: function() {
            this.subscribeChecked = !0, this.subscribe.find(".email-submit").attr("disabled", !this.subscribeChecked);
            var t = pdf.getSubscribeEmail();
            !t && apower.user && apower.user.info && (t = apower.user.info.email), t = t || "", this.emailInput.val(t), this.subscribe.show()
        },
        modifyError: function(t) {
            pdf.tracker(pdf.trackArg(this.taskID, "modifyTask", 0, 0, t))
        },
        modifySuccess: function(t) {
            1 == t.status ? (pdf.tracker(pdf.trackArg(this.taskID, "modifyTask", 1)), pdf.startTask(this.taskID, null, this.startSuccess.bind(this), this.startError, this)) : (pdf.tracker(pdf.trackArg(this.taskID, "modifyTask", 0, 0, JSON.stringify(t))), this.modifyError(t))
        },
        startSuccess: function() {
            pdf.tracker(pdf.trackArg(this.taskID, "startTask", 1)), this.infoTask(this.taskID, this.taskInfoProgress, null, this), this.removeFakeTimer(), this.fakeProgress()
        },
        startError: function(t) {
            pdf.tracker(pdf.trackArg(this.taskID, "startTask", 0, 0, t))
        },
        checkTaskProgress: function() {
            this.infoTask(this.taskID, this.taskInfoProgress, null, this)
        },
        fakeTimerId: -1,
        fakeTime: 0,
        fakeProgressNum: 0,
        fakeProgress: function() {
            this.fakeProgressNum = 0;
            this.fakeTime = 0;
            var t = function() {
                this.fakeTime++, this.fakeProgressNum += 3 * Math.random(), 99 < this.fakeProgressNum && (this.fakeProgressNum = 99, this.removeFakeTimer()), this.onConvertProgress(Math.floor(this.fakeProgressNum)), 500 <= this.infoTime && this.removeFakeTimer()
            }.bind(this);
            t();
            var e = a.timer(t, 1e3, this);
            this.fakeTimerId = e.id, a.addTimer(e)
        },
        removeFakeTimer: function() {
            -1 != this.fakeTimerId && (a.delTimer(this.fakeTimerId), this.fakeTimerId = -1)
        },
        taskInfoProgress: function(t) {
            if (!t.data || 1 != t.status) return this.removeTaskInfoTimer(), this.removeFakeTimer(), void this.onConvertFailed();
            switch (t.data.status) {
                case 0:
                case 1:
                    break;
                case 2:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertSuccess(t);
                    break;
                case -10:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertFailed();
                    break;
                case -5:
                    this.filefromatErr(t.data.errors), this.removeFakeTimer();
                    break;
                default:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertFailed()
            }
        },
        filefromatErr: function() {
            this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertFailed()
        },
        infoTimerId: -1,
        infoTime: 0,
        infoTask: function(t, e, i, n) {
            var s = function() {
                    this.infoTime++, pdf.getTaskInfo(t, e.bind(n), function(t) {}), 500 <= this.infoTime && this.removeTaskInfoTimer()
                }.bind(this),
                r = a.timer(s, 5e3, this);
            this.infoTimerId = r.id, a.addTimer(r)
        },
        removeTaskInfoTimer: function() {
            -1 != this.infoTimerId && (a.delTimer(this.infoTimerId), this.infoTimerId = -1)
        },
        onBeforeConvertFile: function() {},
        getConvertPostData: function(t) {
            t = t || this.taskName;
            return {
                files: [{
                    file_id: this.fileId,
                    password: this.getPassword()
                }],
                args: this.getConvertArgs(t)
            }
        },
        getPassword: function() {
            return this.passwordEl.val()
        },
        getConvertArgs: function() {
            return {}
        },
        onConvertProgress: function(t) {
            -1 != ["pdf-to-word", "pdf-to-image", "pdf-to-ppt", "pdf-to-text", "image-to-pdf", "ocr", "edit-pdf"].indexOf(this.taskName) && this.showLoadingMessage(apower.tr(this.convertingLabel) + t + "%")
        },
        onConvertSuccess: function(t) {
            var e, i, n, s;
            2 == t.data.status ? (this.showSuccessMessage(apower.tr(this.convertSuccessLabel)), this.is_vip ? (this.desktopApp.show(), this.buyVipTip1.hide()) : this.desktopApp.hide(), this.convertSuccessTab.show().siblings().hide(), this.startOverTab.show(), this.startOverTab.css("display", "inline-block"), this.msg.el.css("display", "inline-block"), e = t.data.target_file, this.downloadLink.attr("href", e.url), this.downloadLink.attr("download", e.filename), s = i = "", n = e.filename.lastIndexOf("."), s = e.filename, -1 != n && (i = e.filename.slice(n), s = e.filename.slice(0, n)), this.downloadFileNameEl.html('<p class="download-file-name-base">' + s + '</p><p class="download-file-name-extension">' + i + "</p>"), this.onConvertComplete(), window.hasSubmitEmail || pdf.statApp("record_success_task_num", {
                action: "è®°å½•æˆåŠŸä»»åŠ¡æ•°",
                function: this.taskName,
                time: Date.now()
            })) : this.onConvertFailed()
        },
        onConvertComplete: function() {
            window.scroll(0, 0)
        },
        onConvertFailed: function() {
            this.showErrorMessage(apower.tr(this.convertFailedLabel)), this.convertFailedTab.show().siblings().hide(), this.startOverTab.show(), this.startOverTab.css("display", "inline-block"), this.onConvertComplete()
        },
        onNeedPassword: function() {
            var t = this.passwordEl.is(":visible");
            f(document).$on("keyup", this.onEnterKeyCode, this), t ? this.showErrorMessage(apower.tr("Sorry, wrong password! Please try it again.@@000831")) : this.showErrorMessage(apower.tr("The PDF file is password-protected, please enter the password below.@@000832")), this.passwordEl.val(""), this.passwordTab.show().siblings().hide()
        },
        submitPassword: function() {
            this.getPdfInfo(), f(document).$off("keyup", this.onEnterKeyCode, this)
        },
        onEnterKeyCode: function(t) {
            13 === t.keyCode && this.submitPassword()
        }
    }), f.registerComponent("multi-upload-convert", "base-upload-convert", {
        template: '\n\t\t<div class="drop-area wait-upload" draggable="false">\n\t\t\t<div ref="operationTab" class="drop-area-operation" upload-file-type>\n\t\t\t\t<div ref="selectFileTab" class="upload-box">\n\t\t\t\t\t<div class="drop-area-button add-icon" wide></div>\n\t\t\t\t\t<div class="add-des">Choose File@@000821</div>\n\t\t\t\t\t<div class="drag-here" ref="dragHereBtn" hidden>{{dropHereLabel | trans}}</div>\n\t\t\t\t\t<input type="file" accept="" draggable="false" class="file-input select-pdf-input" ref="input" title="">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="drop-area-btns" ref="tryDesktopBtn">\n\t\t\t\t<a class="drop-area-button upload-panel"  thin id="pagedownload3" href="{pdfeditorUrl}" f-if="taskName !== \'pdf-to-word\' && taskName !== \'ocr\'">Try Desktop@@000824</a>\n\t\t\t</div>\n\t\t</div>\n\t',
        convertList: null,
        addFiles: function() {
            this.input.click()
        },
        onSelectFile: function(t) {
            if (t) {
                if (!pdf.vipInfo.is_vip && t.size > 1048576 * this.vipSize) return this.joinPdfVip = f.newComponent("join-pdf-vip"), this.joinPdfVip.show(), void this.joinPdfVip.on("reset", this.resetUpload.bind(this));
                this.tryDesktopBtn.hide(), f(".drop-area").css("background", "#FFFFFF"), f(".try-desktop-btn").hide(), this.el.removeClass("wait-upload"), this.addToFileList(t)
            }
        },
        addToFileList: function(t) {
            this.convertList || (this.convertList = f.newComponent("file-list", {
                taskName: this.taskName,
                imageType: this.imageType,
                parent: this
            }), this.convertList.on("clearAll", this.onClearAll, this)), this.operationTab.append(this.convertList.el), this.convertList.el.show().siblings().hide(), this.input.hide(), this.convertList.addItem(t)
        },
        onClearAll: function() {
            this.convertList.el.hide().siblings().show(), this.input.show(), f(".drop-area").css("background", "none"), f(".try-desktop-btn").show(), "pdf-to-word" !== this.taskName && "ocr" !== this.taskName && this.tryDesktopBtn.show(), this.el.addClass("wait-upload")
        }
    }), f.registerComponent("file-list-item", "multi-upload-convert", {
        template: '\n\t\t<div class="item-box">\n\t\t\t<div class="file-name">{{file.name}}</div>\n\t\t\t<div class="process">\n\t\t\t\t<div class="uploading" f-show="status === \'uploading\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="container">\n\t\t\t\t\t\t<div class="process-bar" :style.width.percent="file.process"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="upload-success" f-show="status===\'uploaded\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="info">Upload successfully@@001932</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="upload-fail" f-show="status===\'uploadFailed\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="info">Upload failed@@001933</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="converting" f-show="status === \'converting\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="info">{Processing@@001934} {{file.convertProcess}}%</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="convert-success" f-show="status === \'converted\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="info">Convert successfully@@001935</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="convert-fail" f-show="status === \'convertFailed\'">\n\t\t\t\t\t<div class="status-icon"></div>\n\t\t\t\t\t<div class="info">Conversion failed@@001936</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div class="operations">\n\t\t\t\t<a class="icon icon-download" f-show="status === \'converted\'" download href="" ref="downloadLink" target="_blank" title="{{downloadStr}}"></a>\n\t\t\t\t<span class="icon icon-restart" f-show="status === \'uploadFailed\' || status === \'convertFailed\'" @click="clickRestart" title="{{restartStr}}"></span>\n\t\t\t\t<span class="icon icon-delete" f-show="status !== \'converted\'" @click="clickRemove" title="{{deleteStr}}"></span>\n\t\t\t</div>\n\t\t\t<div ref="passwordTab" class="password-tab" hidden>\n\t\t\t\t<pdf-msg ref="msg"></pdf-msg>\n\t\t\t\t<div class="password-input-list" ref="passwordInputList"><input type="password" class="password-input" ref="passwordEl"></div>\n\t\t\t\t<div class="drop-area-button submit-button" wide @click="submitPassword">Submit@@000823</div>\n\t\t\t</div>\n\t\t</div>\n\t',
        downloadStr: apower.tr("Download@@002071"),
        restartStr: apower.tr("Start over@@000822"),
        deleteStr: apower.tr("Delete@@002072"),
        taskName: "",
        imageType: null,
        taskID: "",
        status: "uploading",
        init: function() {
            console.log("file", this.file), this.file.process = this.file.convertProcess = 0, f.parseParams(location.search).fileId || (window.hasOwnProperty("PDFJS") ? (console.log(2), this.getPdfInfoByJS()) : (console.log(3), this.uploadFile(this.authorizeProgress)))
        },
        onReady: function() {},
        getPdfInfoByJS: function() {
            pdf.getPdfInfo({
                password: this.getPassword(),
                file: this.file
            }, this.pdfInfoBack, this)
        },
        pdfInfoBack: function(t) {
            var e = this;
            console.log("password", t), f.nextTick(function() {
                e.file.process = 8, e.file.password = e.getPassword()
            }), "PasswordException" != t.errType ? "InvalidPDFException" == t.errType || t.err ? this.onUploadFailed() : (this.passwordTab.hide(), this.uploadFile(this.authorizeProgress)) : this.onNeedPassword()
        },
        onUploadFailed: function() {
            var t = this;
            f.nextTick(function() {
                t.status = "uploadFailed", t.trigger("uploadFailed", t.itemId)
            })
        },
        uploadFile: function(t) {
            ossUploader(this.file, t, this.uploadOssOk, this.fileOssError, this.returnProgress, this, 1).start()
        },
        uploadOssOk: function(t) {
            var e = this,
                i = t.data;
            1 == i.status ? (f.nextTick(function() {
                e.file.fileId = e.getFileId(i)
            }), this.status = "uploaded", this.trigger("uploadFinish", this.itemId)) : this.onUploadFailed()
        },
        fileOssError: function(t) {
            var e = this;
            t && t.responseJSON && t.responseJSON.status < 0 ? pdf.getPdfSesstion(this.reloadSessionOk, this.reloadSessionErr, this) : f.nextTick(function() {
                e.status = "uploadFailed", e.trigger("uploadFailed", e.itemId)
            })
        },
        reloadSessionOk: function() {
            this.token = pdf.getSession(), this.uploadFile(this.authorizeProgress)
        },
        reloadSessionErr: function() {},
        getFileId: function(t) {
            var e = t.data.resource ? t.data.resource.resource_id : t.data.id;
            return e
        },
        authorizeProgress: function() {
            var t = this;
            f.nextTick(function() {
                t.file.process = 10
            })
        },
        returnProgress: function(t) {
            var e, i = this;
            0 <= t && (e = Math.floor(10 + 90 * t), f.nextTick(function() {
                i.file.process = e
            }))
        },
        getPassword: function() {
            return this.passwordEl.val()
        },
        onNeedPassword: function() {
            var t = this.passwordEl.is(":visible");
            f(document).$on("keyup", this.onEnterKeyCode, this), console.log(t), t ? this.showErrorMessage(apower.tr("Sorry, wrong password! Please try it again.@@000831")) : this.showErrorMessage(apower.tr("The PDF file is password-protected, please enter the password below.@@000832")), this.passwordEl.val(""), this.passwordTab.show(), this.msg.el.siblings().show()
        },
        submitPassword: function() {
            this.getPdfInfoByJS(), f(document).$off("keyup", this.onEnterKeyCode, this)
        },
        startConvert: function() {
            this.status = "converting", this.createTask()
        },
        onTaskCreated: function(t) {
            var e = this;
            this.taskID = t.data.task_id, f.nextTick(function() {
                e.file.taskId = e.taskID
            }), this.trigger("taskCreated", this.taskID), "pdf-to-word" === this.taskName ? (console.log("2 pdf-to-word infoTask"), this.infoTask(this.taskID, this.taskInfoProgress, null, this), this.removeFakeTimer(), this.fakeProgress()) : this.convertFile()
        },
        onTaskCreateFailed: function() {
            var t = this;
            f.nextTick(function() {
                t.status = "convertFailed", t.trigger("convertFailed", t.itemId)
            })
        },
        convertFile: function() {
            var t = this.getConvertPostData();
            pdf.modifyTask(this.taskID, t, this.modifySuccess.bind(this), this.modifyError)
        },
        modifyError: function() {
            var t = this;
            f.nextTick(function() {
                t.status = "convertFailed", t.trigger("convertFailed", t.itemId)
            })
        },
        startError: function() {
            var t = this;
            f.nextTick(function() {
                t.status = "convertFailed", t.trigger("convertFailed", t.itemId)
            })
        },
        getConvertPostData: function() {
            var t = this.taskName;
            return {
                files: [{
                    file_id: this.file.fileId,
                    password: this.file.password
                }],
                args: this.getConvertArgs(t)
            }
        },
        getConvertArgs: function() {
            return this.imageType ? "png" === this.imageType ? {
                type: "single",
                format: "png"
            } : "jpg" === this.imageType ? {
                type: "single",
                format: "jpg"
            } : void 0 : {}
        },
        onConvertProgress: function(t) {
            var e = this;
            f.nextTick(function() {
                e.file.convertProcess = t
            })
        },
        taskInfoProgress: function(t) {
            if (!t.data || 1 != t.status) return this.removeTaskInfoTimer(), this.removeFakeTimer(), void this.onConvertFailed();
            switch (t.data.status) {
                case 0:
                case 1:
                    break;
                case 2:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertSuccess(t);
                    break;
                case -10:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertFailed();
                    break;
                case -5:
                    this.filefromatErr(t.data.errors), this.removeFakeTimer();
                    break;
                default:
                    this.removeTaskInfoTimer(), this.removeFakeTimer(), this.onConvertFailed()
            }
        },
        onConvertSuccess: function(e) {
            var i = this;
            2 == e.data.status ? (f.nextTick(function() {
                var t = e.data.target_file;
                i.downloadLink.attr("href", t.url), i.downloadLink.attr("download", t.filename), i.downloadLink.attr("title", t.filename), i.status = "converted", i.targetFileUrl = t.url, i.trigger("complete", t.file_id, i.itemId)
            }), window.hasSubmitEmail || pdf.statApp("record_success_task_num", {
                action: "è®°å½•æˆåŠŸä»»åŠ¡æ•°",
                function: this.taskName,
                time: Date.now()
            }), this.onConvertComplete()) : this.onConvertFailed()
        },
        onConvertFailed: function() {
            var t = this;
            f.nextTick(function() {
                t.status = "convertFailed", t.trigger("convertFailed", t.itemId)
            }), this.onConvertComplete()
        },
        onConvertComplete: function() {
            window.scroll(0, 0)
        },
        clickRemove: function() {
            this.trigger("remove", this)
        },
        clickRestart: function() {
            var t = this;
            "uploadFailed" === this.status ? (this.trigger("uploadFailedRestart", this.itemId), f.nextTick(function() {
                t.status = "uploading", t.file.process = 0, t.getPdfInfoByJS()
            })) : "convertFailed" === this.status && (this.trigger("convertFailedRestart", this.itemId), f.nextTick(function() {
                t.status = "converting", t.file.convertProcess = 0
            }), this.file.taskId ? this.convertFile() : this.createTask())
        }
    }), f.registerComponent("file-list", "multi-upload-convert", {
        template: '\n\t\t<div></div>\n\t',
        taskName: "",
        parent: null,
        uploadingNum: 0,
        uploadFailedNum: 0,
        convertFailedNum: 0,
        completeNum: 0,
        status: "uploading",
        isShowSubscribe: !1,
        isEmailSubmiting: !1,
        itemInstanceArr: [],
        tempEmail: "",
        taskIdArr: [],
        targetFileIdArr: [],
        packageDownloadUrl: "",
        packageDownloading: !1,
        showValidatorMsg: !1,
        isSingleFile: !0,
        onReady: function() {
            f.env.isMobile ? this.desktopApp.attr("href", pdf.pdfConverterUrl) : this.desktopApp.attr("href", pdf.pdfEditorUrl)
        },
        init: function() {
            var t = f.newComponent("purchase-guidance");
            this.multiUploadArea.append(t.el)
        },
        addFiles: function() {
            pdf.vipInfo.is_vip ? this.parent.addFiles() : f.newComponent("out-of-use-limit").show()
        },
        addItem: function(t) {
            var e;
            t && (console.log(t), e = this.getNewItem(t), this.uploadingNum += 1, this.status = "uploading", this.itemInstanceArr.push(e), this.listMid.append(e.el))
        },
        getNewItem: function(t) {
            var e = f.newComponent("file-list-item", {
                taskName: this.taskName,
                file: t,
                imageType: this.imageType,
                itemId: apower.randomString()
            });
            return e.on("uploadFinish", this.onItemUploadFinish, this), e.on("uploadFailed", this.onItemUploadFailed, this), e.on("convertFailed", this.onItemConvertFailed, this), e.on("complete", this.onItemConvertComplete, this), e.on("remove", this.onRemoveItem, this), e.on("taskCreated", this.onItemTaskCreated, this), e.on("uploadFailedRestart", this.onUploadFailedItemRestart, this), e.on("convertFailedRestart", this.onConvertFailedItemRestart, this), e
        },
        onItemUploadFinish: function(t) {
            var e = this;
            this.checkItemIsExist(t) && (--this.uploadingNum, 0 === this.uploadingNum && f.nextTick(function() {
                e.status = "uploaded"
            }))
        },
        onItemUploadFailed: function(t) {
            var e = this;
            this.checkItemIsExist(t) && (--this.uploadingNum, this.uploadFailedNum += 1, 0 < this.uploadFailedNum && this.uploadFailedNum === this.itemInstanceArr.length && f.nextTick(function() {
                e.status = "all-upload-failed"
            }))
        },
        onItemConvertFailed: function(t) {
            var e = this;
            this.checkItemIsExist(t) && (this.convertFailedNum += 1, 0 < this.convertFailedNum && this.convertFailedNum === this.itemInstanceArr.length && f.nextTick(function() {
                e.status = "all-convert-failed"
            }))
        },
        onItemConvertComplete: function(t, e) {
            this.checkItemIsExist(e) && (this.targetFileIdArr.push(t), this.completeNum += 1, this.completeNum === this.itemInstanceArr.length && 0 < this.completeNum && (this.isSingleFile = !(1 < this.itemInstanceArr.length), this.isSingleFile && this.singleFileDownload.attr("href", this.itemInstanceArr[0].targetFileUrl), this.isShowSubscribe = !1, this.status = "converted"))
        },
        onRemoveItem: function(t) {
            var e, i = this,
                n = this.itemInstanceArr.indexOf(t); - 1 !== n && (this.itemInstanceArr.splice(n, 1)[0].el.remove(), 0 != this.itemInstanceArr.length ? (t.taskId && (e = this.taskIdArr.indexOf(t.taskId), this.taskIdArr.splice(e, 1)), "uploading" === t.status && (--this.uploadingNum, 0 === this.uploadingNum && f.nextTick(function() {
                i.status = "uploaded"
            })), "uploadFailed" === t.status && (--this.uploadFailedNum, this.uploadFailedNum === this.itemInstanceArr.length && 0 < this.uploadFailedNum && $nextTick(function() {
                i.status = "all-upload-failed"
            }), 0 === this.uploadingNum && 0 === this.uploadFailedNum && f.nextTick(function() {
                i.status = "uploaded"
            })), "converting" === t.status && f.nextTick(function() {
                i.completeNum === i.itemInstanceArr.length && 0 < i.completeNum && (i.isShowSubscribe = !1, i.status = "converted")
            }), "convertFailed" === t.status && f.nextTick(function() {
                --i.convertFailedNum, 0 < i.convertFailedNum && i.convertFailedNum === i.itemInstanceArr.length && (i.status = "all-convert-failed"), i.completeNum === i.itemInstanceArr.length && 0 < i.completeNum && (i.isShowSubscribe = !1, i.status = "converted")
            })) : this.startOver())
        },
        onUploadFailedItemRestart: function(t) {
            var e = this;
            this.checkItemIsExist(t) && (this.uploadingNum += 1, --this.uploadFailedNum, f.nextTick(function() {
                e.status = "uploading"
            }))
        },
        onConvertFailedItemRestart: function(t) {
            var e = this;
            this.checkItemIsExist(t) && (--this.convertFailedNum, f.nextTick(function() {
                e.status = "converting"
            }))
        },
        checkItemIsExist: function(e) {
            return !(!this.itemInstanceArr && 0 === this.itemInstanceArr.length) && this.itemInstanceArr.some(function(t) {
                return t.itemId === e
            })
        },
        onItemTaskCreated: function(t) {
            this.taskIdArr.push(t), this.taskIdArr.length === this.itemInstanceArr.length && this.showSubscribe()
        },
        startConvertFileList: function() {
            this.uploadingNum || (this.status = "converting", pdf.statApp("record_convert_task_num", {
                action: "è®°å½•å¼€å§‹è½¬æ¢æ—¶çš„ä»»åŠ¡æ•°",
                function: this.taskName,
                task_num: this.itemInstanceArr.length,
                time: Date.now()
            }), this.itemInstanceArr.forEach(function(t) {
                t.startConvert()
            }))
        },
        startOver: function() {
            this.itemInstanceArr = [], this.taskIdArr = [], this.targetFileIdArr = [], this.uploadingNum = 0, this.uploadFailedNum = 0, this.convertFailedNum = 0, this.completeNum = 0, this.stataus = "uploading", this.isShowSubscribe = !1, this.isEmailSubmiting = !1, this.packageDownloadUrl = "", this.packageDownloading = !1, this.tempEmail = "", this.isSingleFile = !0;
            var t = document.getElementById("packageDownload");
            t && document.body.removeChild(t), this.listMid.empty(), this.trigger("clearAll")
        },
        showSubscribe: function() {
            var t = pdf.getSubscribeEmail();
            !t && apower.user && apower.user.info && (t = apower.user.info.email), t = t || "", this.emailInput.val(t), this.isShowSubscribe = !0
        },
        changeInput: function() {
            this.showValidatorMsg = !1
        },
        onClickEmailSubmit: function() {
            var t;
            this.isEmailSubmiting || (t = "", t = this.emailInput.val(), this.validateEmail(t) ? (window.hasSubmitEmail = !0, pdf.statApp("record_email_task_num", {
                action: "è®°å½•é‚®ç®±æŽ¥æ”¶çš„ä»»åŠ¡æ•°",
                function: this.taskName,
                task_num: this.taskIdArr.length,
                time: Date.now()
            }), this.isEmailSubmiting = !0, this.tempEmail = t, this.submitEmail(t)) : this.showValidatorMsg = !0)
        },
        submitEmail: function(t) {
            var e = {
                task_ids: JSON.stringify(this.taskIdArr),
                email: t,
                service_type: this.taskName
            };
            pdf.createSubscribeTask(e, this.onSubscribeTaskCreated, this.onSubscribeTaskCreateFailed, this)
        },
        onSubscribeTaskCreated: function(t) {
            1 == t.status ? (pdf.setSubscribeEmail(this.tempEmail), f.newComponent("subscribe-success").show(), this.isEmailSubmiting = !1) : this.onSubscribeTaskCreateFailed()
        },
        onSubscribeTaskCreateFailed: function() {
            this.isEmailSubmiting = !1, window.hasSubmitEmail = !1
        },
        clickToDownloadAll: function() {
            this.packageDownloading || (this.packageDownloadUrl ? document.getElementById("packageDownload").click() : this.createPackageTask())
        },
        clickToUploadAgain: function() {
            this.status = "uploading", this.uploadFailedNum = 0, this.itemInstanceArr.forEach(function(t) {
                t.clickRestart()
            })
        },
        clickToConvertAgain: function() {
            this.status = "converting", this.convertFailedNum = 0, this.itemInstanceArr.forEach(function(t) {
                t.clickRestart()
            })
        },
        createPackageTask: function() {
            var t = this;
            f.nextTick(function() {
                t.packageDownloading = !0
            });
            var e = new FormData;
            e.append("id_list", JSON.stringify(this.targetFileIdArr)), pdf.createPackageTask(e, this.onPackageTaskCreated, this.onPackageTaskCreateFailed, this)
        },
        onPackageTaskCreated: function(t) {
            var e = t.data.task_id;
            e && this.infoPackageTask(e, this.packageTaskInfoProgress, null, this)
        },
        onPackageTaskCreateFailed: function() {
            var t = this;
            f.nextTick(function() {
                t.packageDownloading = !1
            })
        },
        infoPackageTimerId: -1,
        infoPackageTime: 0,
        infoPackageTask: function(t, e, i, n) {
            var s = function() {
                    this.infoPackageTime++, pdf.getPackageTaskInfo(t, e.bind(n), function(t) {}), 500 <= this.infoPackageTime && this.removePackageTaskInfoTimer()
                }.bind(this),
                r = a.timer(s, 2e3, this);
            this.infoPackageTimerId = r.id, a.addTimer(r)
        },
        removePackageTaskInfoTimer: function() {
            -1 != this.infoPackageTimerId && (a.delTimer(this.infoPackageTimerId), this.infoPackageTimerId = -1)
        },
        packageTaskInfoProgress: function(t) {
            if (1 == t.status && 100 == t.data.progress && (this.removePackageTaskInfoTimer(), this.onPackageSuccess(t)), !t.data || 1 != t.status) return this.removePackageTaskInfoTimer(), void this.onPackageFailed()
        },
        onPackageSuccess: function(t) {
            var e, i = this;
            this.packageDownloadUrl || (this.packageDownloadUrl = t.data.url, (e = document.createElement("a")).id = "packageDownload", e.href = this.packageDownloadUrl, document.body.appendChild(e), e.click(), f.nextTick(function() {
                i.packageDownloading = !1
            }))
        },
        onPackageFailed: function() {
            var t = this;
            f.nextTick(function() {
                t.packageDownloading = !1
            })
        }
    });
    var o = apower.tr;
    f.registerComponent("service-time", {
        template: '\n\t\t<div class="service-time">\n\t\t\t<p class="des-txt" ref="timeEl"></p>\n\t\t</div>\n\t',
        numStr: "",
        num: 0,
        timestamp: 0,
        currentTime: 0,
        startTime: 1538050395389,
        startNum: 42211143,
        init: function() {
            this.getStat()
        },
        getStat: function() {
            pdf.getStat("/stat", this.statBack, this.statErr, this)
        },
        statBack: function(t) {
            this.timestamp = t.data.server_time, this.currentTime = Date.now(), this.initTimeDown()
        },
        initTimeDown: function() {
            var t = a.timer(this.txtDown, 1e3, this);
            a.addTimer(t)
        },
        txtDown: function() {
            var t, e;
            .65 < Math.random() || (t = parseInt((1e3 * this.timestamp - this.startTime) / 1e3), e = parseInt((Date.now() - this.currentTime) / 1e3), this.num = this.startNum + t + e, this.freshStr())
        },
        freshStr: function() {
            this.timeEl.html(this.getStr(this.num))
        },
        getStr: function(t) {
            return o("LightPDF has already processed {0} files@@001529", o("<span>{0}</span>", t))
        },
        statErr: function() {}
    }), f.registerComponent("checkbox-ocr", {
        template: '\n\t\t<div class="checkbox" :class.active="checked" @click="onClick">\n\t\t\t<div class="checkbox-icon">\n\t\t\t\t<icon type="checkbox"></icon>\n\t\t\t</div>\n\t\t\t<div class="checkbox-label">\n\t\t\t\t<slot></slot>\n\t\t\t</div>\n\t\t</div>\n\t',
        _modelProperty: "checked",
        checked: !1,
        value: "",
        boxobj: null,
        onCreated: function() {
            var e = this;
            this.boxobj && (this.boxobj[this.value] = this);
            var t = this.closest("checkbox-group");
            t && (this.group = t, this.checked = -1 < t.value.findIndex(function(t) {
                return t == e.value
            }), t.register(this))
        },
        onClick: function() {
            this.checked = !this.checked, this.trigger("change", this.checked, this.value)
        },
        unSelect: function() {
            this.checked = !1
        },
        select: function() {
            this.checked = !0
        }
    }), f.registerComponent("checkbox-term", "checkbox-ocr", {
        template: '\n\t\t<div class="checkbox" :class.active="checked" @click="onClick">\n\t\t\t<div class="checkbox-icon">\n\t\t\t\t<icon type="checkbox"></icon>\n\t\t\t</div>\n\t\t</div>\n\t'
    }), f.registerComponent("join-pdf-vip", "win", {
        template: '\n\t\t<nav class="win join-pdf-vip">\n\t\t\t<div class="pdf-vip-win">\n\t\t\t\t<h2>{{titleStr}}</h2>\n\t\t\t\t<p class="tip-des">{{desStr}}</p>\n\t\t\t\t<a href="{{rootslash()}}/version-compare" target="_blank" class="compare-version">Compare all account types@@001652<span></span></a>\n\t\t\t\t<div class="btn-box">\n\t\t\t\t\t<a class="join-vip" ref="joinBtn" href="{{buyVipUrl}}">Join VIP@@002145</a>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        isGuest: -1,
        listened: 0,
        desStr: o("The file has not been added for it exceeds the maximum file size of 10M. If you want to manage the file over 10M, you can join LightPDF VIP membership for unlimited service@@001665", "5M", "5M"),
        titleStr: o("Exceed the Maximum File Size@@001666"),
        is_vip: !1,
        vip_expired_at: 0,
        buyVipUrl: "javascript:void(0);",
        onCreated: function() {
            this.apower = apower
        },
        init: function() {
            this.joinBtn.$on("click", this.btnClick.bind(this)), pdf.isVipLink() && (this.buyVipUrl = this.rootslash() + "/buy-vip")
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        btnClick: function() {
            pdf.isVipLink() || (apower.user.isLogined() ? this.toJoinVip() : this.toSignIn())
        },
        toSignIn: function() {
            var t = apower.user;
            t && !this.listened && (this.listened = 1, t.on("logined", this.onLogined, this)), apower.user.isLogined() || f.newComponent("login").show()
        },
        onLogined: function() {
            pdf.pdfsessionQuery.getPdfSesstion(this.sessionBack, this.sessionErr, this)
        },
        sessionBack: function() {
            apower.user.isLogined() && this.checkVip()
        },
        checkVip: function() {
            pdf.getVipInfo(this.vipInfoFun, this.checkVipErr, this)
        },
        vipInfoFun: function(t) {
            this.is_vip = !1, this.vip_expired_at = 0, t.data && (this.is_vip = t.data.is_activated, this.vip_expired_at = t.data.expired_at), pdf.setVipInfo(this.is_vip, this.vip_expired_at), this.is_vip ? this.whenCloseWin() : this.toJoinVip()
        },
        checkVipErr: function() {},
        sessionErr: function() {},
        whenCloseWin: function() {
            this.hide(), pdf.vipInfo.is_vip || this.trigger("reset")
        },
        toJoinVip: function() {
            this.whenCloseWin(), f.newComponent("buy-pdf-vip").show()
        },
        hasEmail: function() {
            var t = apower.user;
            return t && t.info && t.info.email && -1 != t.info.email.indexOf("@") || t && t.info && t.info.telephone && 1 < t.info.telephone.length
        }
    }), f.registerComponent("pdf-pwd", "win", {
        template: '\n\t\t\t<nav class="win join-pdf-vip">\n\t\t\t\t<div class="pdf-vip-win">\n\t\t\t\t\t<h2>The PDF file is password-protected, please enter the password below.@@000832</h2>\n\t\t\t\t\t<div class="password-bar">\n\t\t\t\t\t<span class="input-title" ref="original_name">{{fileName}}</span><br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="password-input-list"><input type="password" class="password-input" ref="pwdEl"></div>\n\t\t\t\t\t<div class="drop-area-button submit-button" wide @click="submitPassword">Submit@@000823</div>\n\t\t\t\t</div>\n\t\t\t</nav>\n\t\t',
        fileName: "",
        pwd: "",
        onCreated: function() {
            this.apower = apower, this.el.find(".password-input").attr({
                placeholder: apower.tr("Password is required@@000848")
            })
        },
        onReady: function() {
            this.closeEl.hide()
        },
        setFileInfo: function(t, e) {
            var i = this;
            this.hashId = e, f.nextTick(function() {
                i.fileName = t
            })
        },
        submitPassword: function() {
            this.pwd = this.pwdEl.val(), this.pwd.length && (this.trigger("submitPwd", this.pwd, this.hashId), this.whenCloseWin(), this.destroy())
        }
    });
    var s = {
            worldBuyLink: "https://secure.2checkout.com/order/checkout.php?PRODS={0}&CART=1&CARD=2{1}&SHORT_FORM=1",
            cnBuyLink: "https://www.apowersoft.cn/order?product_id={0}",
            titleM: o("Monthly@@001667"),
            titleS: o("Quarterly@@001668"),
            titleY: o("Yearly@@001669"),
            titleL: o("Lifetime@@001670")
        },
        r = {
            worldBuyLink: "https://secure.2checkout.com/order/checkout.php?PRODS={0}&CART=1&CARD=2{1}&SHORT_FORM=1",
            cnBuyLink: "https://www.apowersoft.cn/order?product_id={0}_L&SRC=alltop",
            getId: function(t) {
                return pdf.getUrlParam(t, "PRODS") || pdf.getUrlParam(t, "product_id") || ""
            },
            link: {
                ar: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=ar"),
                        pages: 100,
                        title: s.titleM,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=ar"),
                        pages: 300,
                        title: s.titleS,
                        price: "14.99",
                        priceStr: "$14.99"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=ar"),
                        pages: 500,
                        title: s.titleY,
                        price: "19.99",
                        priceStr: "$19.99"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=ar"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                cz: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=cs"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=cs"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=cs"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=cs"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                de: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=de"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=de"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=de"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=de"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                dk: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=da"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=da"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=da"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=da"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                en: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=en"),
                        pages: 100,
                        title: s.titleM,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=en"),
                        pages: 300,
                        title: s.titleS,
                        price: "14.99",
                        priceStr: "$14.99"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=en"),
                        pages: 500,
                        title: s.titleY,
                        price: "19.99",
                        priceStr: "$19.99"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=en"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "$69.95"
                    }
                },
                es: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=es"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=es"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=es"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=es"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                fi: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=fi"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=fi"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=fi"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=fi"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                fr: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=fr"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=fr"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=fr"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=fr"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                gr: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=el"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=el"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=el"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=el"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                hu: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=hu"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=hu"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=hu"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=hu"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                it: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=it"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=it"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=it"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=it"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                jp: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=JPY&LANG=ja"),
                        pages: 100,
                        title: s.titleM,
                        price: "1090",
                        priceStr: "1090å††"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=JPY&LANG=ja"),
                        pages: 300,
                        title: s.titleS,
                        price: "1690",
                        priceStr: "1690å††"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=JPY&LANG=ja"),
                        pages: 500,
                        title: s.titleY,
                        price: "2190",
                        priceStr: "2190å††"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=JPY&LANG=ja"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "7890",
                        priceStr: "7890å††"
                    }
                },
                nl: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=nl"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=nl"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=nl"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=nl"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                no: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=no"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=no"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=no"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=no"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                pl: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=pl"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=pl"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=pl"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=pl"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                pt: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&LANG=pt"),
                        pages: 100,
                        title: s.titleM,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&LANG=pt"),
                        pages: 300,
                        title: s.titleS,
                        price: "14.99",
                        priceStr: "$14.99"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&LANG=pt"),
                        pages: 500,
                        title: s.titleY,
                        price: "19.99",
                        priceStr: "$19.99"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&LANG=pt"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "$69.95"
                    }
                },
                se: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=sv"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=sv"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=sv"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=sv"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                tr: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=EUR&LANG=tr"),
                        pages: 100,
                        title: s.titleM,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=EUR&LANG=tr"),
                        pages: 300,
                        title: s.titleS,
                        price: "13.99",
                        priceStr: "13.99â‚¬"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=EUR&LANG=tr"),
                        pages: 500,
                        title: s.titleY,
                        price: "18.99",
                        priceStr: "18.99â‚¬"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=EUR&LANG=tr"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "69.95",
                        priceStr: "69.95â‚¬"
                    }
                },
                tw: {
                    1: {
                        link: o(s.worldBuyLink, "14885177&PRODCODE=14885177_M", "&CURRENCY=TWD&LANG=zy"),
                        pages: 100,
                        title: s.titleM,
                        price: "310",
                        priceStr: "NT$310"
                    },
                    2: {
                        link: o(s.worldBuyLink, "14885180&PRODCODE=14885180_Q", "&CURRENCY=TWD&LANG=zy"),
                        pages: 300,
                        title: s.titleS,
                        price: "460",
                        priceStr: "NT$460"
                    },
                    3: {
                        link: o(s.worldBuyLink, "14885183&PRODCODE=14885183_Y", "&CURRENCY=TWD&LANG=zy"),
                        pages: 500,
                        title: s.titleY,
                        price: "620",
                        priceStr: "NT$620"
                    },
                    4: {
                        link: o(s.worldBuyLink, "14885186&PRODCODE=14885186_L", "&CURRENCY=TWD&LANG=zy"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "19.99",
                        priceStr: "$19.99"
                    }
                },
                zh: {
                    1: {
                        link: o(s.cnBuyLink, "18180244_M", "&CURRENCY=TWD&LANG=zy"),
                        pages: 10,
                        title: s.titleM,
                        price: "39",
                        priceStr: "ï¿¥39"
                    },
                    2: {
                        link: o(s.cnBuyLink, "18180245_Q", "&CURRENCY=TWD&LANG=zy"),
                        pages: 50,
                        title: s.titleS,
                        price: "49",
                        priceStr: "ï¿¥49"
                    },
                    3: {
                        link: o(s.cnBuyLink, "18180246_Y", "&CURRENCY=TWD&LANG=zy"),
                        pages: 100,
                        title: s.titleY,
                        price: "69",
                        priceStr: "ï¿¥69"
                    },
                    4: {
                        link: o(s.cnBuyLink, "18180247_L", "&CURRENCY=TWD&LANG=zy"),
                        pages: 1e3,
                        title: s.titleL,
                        price: "99",
                        priceStr: "ï¿¥99"
                    }
                }
            }
        },
        l = {
            worldBuyLink: "https://secure.2checkout.com/order/checkout.php?PRODS={0}&CART=1&CARD=2{1}&SHORT_FORM=1",
            cnBuyLink: "https://www.apowersoft.cn/order?product_id={0}_L&SRC=alltop"
        },
        c = {
            worldBuyLink: "https://secure.2checkout.com/order/checkout.php?PRODS={0}&CART=1&CARD=2{1}&SHORT_FORM=1",
            cnBuyLink: "https://www.apowersoft.cn/order?product_id={0}_L&SRC=alltop",
            link: {
                ar: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=ar"),
                        pages: 100,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=ar"),
                        pages: 300,
                        price: "24.99",
                        priceStr: "$24.99"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=ar"),
                        pages: 500,
                        price: "39.99",
                        priceStr: "$39.99"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=ar"),
                        pages: 1e3,
                        price: "59.99",
                        priceStr: "$59.99"
                    }
                },
                cz: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=cs"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=cs"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=cs"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=cs"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                de: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=de"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=de"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=de"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=de"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                dk: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=da"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=da"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=da"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=da"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                en: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=en"),
                        pages: 100,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=en"),
                        pages: 300,
                        price: "24.99",
                        priceStr: "$24.99"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=en"),
                        pages: 500,
                        price: "39.99",
                        priceStr: "$39.99"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=en"),
                        pages: 1e3,
                        price: "59.99",
                        priceStr: "$59.99"
                    }
                },
                es: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=es"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=es"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=es"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=es"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                fi: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=fi"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=fi"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=fi"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=fi"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                fr: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=fr"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=fr"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=fr"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=fr"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                gr: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=el"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=el"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=el"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=el"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                hu: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=hu"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=hu"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=hu"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=hu"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                it: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=it"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=it"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=it"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=it"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                jp: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=JPY&LANG=ja"),
                        pages: 100,
                        price: "1080",
                        priceStr: "1080å††"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=JPY&LANG=ja"),
                        pages: 300,
                        price: "2680",
                        priceStr: "2680å††"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=JPY&LANG=ja"),
                        pages: 500,
                        price: "4480",
                        priceStr: "4480å††"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=JPY&LANG=ja"),
                        pages: 1e3,
                        price: "6480",
                        priceStr: "6480å††"
                    }
                },
                nl: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=nl"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=nl"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=nl"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=nl"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                no: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=no"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=no"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=no"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=no"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                pl: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=pl"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=pl"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=pl"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=pl"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                pt: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&LANG=pt"),
                        pages: 100,
                        price: "9.99",
                        priceStr: "$9.99"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&LANG=pt"),
                        pages: 300,
                        price: "24.99",
                        priceStr: "$24.99"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&LANG=pt"),
                        pages: 500,
                        price: "39.99",
                        priceStr: "$39.99"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&LANG=pt"),
                        pages: 1e3,
                        price: "59.99",
                        priceStr: "$59.99"
                    }
                },
                se: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=sv"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=sv"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=sv"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=sv"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                tr: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=EUR&LANG=tr"),
                        pages: 100,
                        price: "8.99",
                        priceStr: "8.99â‚¬"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=EUR&LANG=tr"),
                        pages: 300,
                        price: "22.99",
                        priceStr: "22.99â‚¬"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=EUR&LANG=tr"),
                        pages: 500,
                        price: "34.99",
                        priceStr: "34.99â‚¬"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=EUR&LANG=tr"),
                        pages: 1e3,
                        price: "54.99",
                        priceStr: "54.99â‚¬"
                    }
                },
                tw: {
                    1: {
                        link: o(l.worldBuyLink, "13982834", "&CURRENCY=TWD&LANG=zy"),
                        pages: 100,
                        price: "310",
                        priceStr: "NT$310"
                    },
                    2: {
                        link: o(l.worldBuyLink, "13984023", "&CURRENCY=TWD&LANG=zy"),
                        pages: 300,
                        price: "780",
                        priceStr: "NT$780"
                    },
                    3: {
                        link: o(l.worldBuyLink, "13984032", "&CURRENCY=TWD&LANG=zy"),
                        pages: 500,
                        price: "1190",
                        priceStr: "NT$1190"
                    },
                    4: {
                        link: o(l.worldBuyLink, "13984042", "&CURRENCY=TWD&LANG=zy"),
                        pages: 1e3,
                        price: "1860",
                        priceStr: "NT$1860"
                    }
                },
                zh: {
                    1: {
                        link: o(l.cnBuyLink, "18180225", "&CURRENCY=TWD&LANG=zy"),
                        pages: 10,
                        price: "19.99",
                        priceStr: "ï¿¥19.99"
                    },
                    3: {
                        link: o(l.cnBuyLink, "18180226", "&CURRENCY=TWD&LANG=zy"),
                        pages: 50,
                        price: "19.99",
                        priceStr: "ï¿¥19.99"
                    },
                    2: {
                        link: o(l.cnBuyLink, "18180227", "&CURRENCY=TWD&LANG=zy"),
                        pages: 100,
                        price: "99.99",
                        priceStr: "ï¿¥99.99"
                    },
                    4: {
                        link: o(l.cnBuyLink, "18180228", "&CURRENCY=TWD&LANG=zy"),
                        pages: 1e3,
                        price: "799.99",
                        priceStr: "ï¿¥799.99"
                    }
                }
            }
        };
    window.priceObj = {
        buylink: s,
        priceMap: r,
        ocrBuylink: l,
        ocrPriceMap: c
    }, f.registerComponent("subscribe-success", "win", {
        template: '\n\t\t<nav class="win subscribe-success">\n\t\t\t<div class="subscribe-success-win">\n\t\t\t\t<div class="top-box">\n\t\t\t\t\t<div class="success-svg"></div>\n\t\t\t\t\t<p>Subscribe Successfully!@@001912</p>\n\t\t\t\t</div>\n\t\t\t\t<p class="des">The conversion may take 5 minutes to complete, please check your inbox to access your processed file.@@001913</p>\n\t\t\t\t<div class="bottom-box" ref=\'buyVip\'>\n\t\t\t\t\t<p class="des-tittle">Want to access your files faster?@@001914</p>\n\t\t\t\t\t<p class="buy-des">Download the app to instantly convert, merge, compress and manage PDF, etc.@@001915</p>\n\t\t\t\t\t<a class="buy-now drop-area-button download" id="download3" target="_blank" href=\'https://download.aoscdn.com/down.php?softid=lightpdfeditor-pin\'>Try Desktop@@000824</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        init: function() {
            pdf.vipInfo.is_vip
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        whenCloseWin: function() {
            location.reload(), this.hide()
        }
    }), f.registerComponent("buy-pdf-vip", "win", {
        template: '\n\t\t<nav class="win buy-pdf">\n\t\t\t<div class="buy-pdf-win">\n\t\t\t\t<div class="left-box">\n\t\t\t\t\t<div class="logo"></div>\n\t\t\t\t\t<div class="ocr-title">\n\t\t\t\t\t\t<h2>LightPDF VIP@@001683</h2>\n\t\t\t\t\t\t<div class="ocr-line"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2 class="feature">Convert PDF without limitation@@001654</h2>\n\t\t\t\t\t<h2 class="feature">Edit PDF without limitation@@001655</h2>\n\t\t\t\t\t<h2 class="feature">Use full functions (except OCR) without limitation@@001656</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="right-box">\n\t\t\t\t\t<div class="top-box">\n\t\t\t\t\t\t<h2 class="nick-name" ref="nickNameEl">{{nickNameStr}}</h2>\n\t\t\t\t\t\t<h2 class="des">LightPDF VIP@@001683</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bottom-box">\n\t\t\t\t\t\t<p class="des">LightPDF VIP Membership enjoys LightPDF conversion and editing service without limitation@@001657</p>\n\t\t\t\t\t\t<div class="btn-box">\n\t\t\t\t\t\t<a f-for="item,value in getBuyLinkOption()" :attr.goods-type="item" class="type-btn">\n\t\t\t\t\t\t\t<span class="red-price">{{value.priceStr}}</span>/{{value.title}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="agreement">\n\t\t\t\t\t\t<checkbox-term :checked="true" ref="checkTerm" @change="handleTrem"></checkbox-term>\n\t\t\t\t\t\t\t<div class="check-box">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t<p>{{priceStr}}<span>{{preferentiStr}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="bill" href="" target="_blank">Place order@@002147</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        priceObj: null,
        payLink: "",
        priceStr: "",
        preferentiStr: "",
        nickNameStr: apower.user.getName(),
        vipServiceStr: o("Terms@@002132"),
        vipMonthStr: o("è¿žç»­åŒ…æœˆæœåŠ¡æ¡æ¬¾@@002133"),
        acceptStr: "",
        getAcceptStr: function() {
            var t = o("<p>{0}<p>", o("I have read and agreed with {0}@@002134", this.termStr()));
            this.el.find(".agreement .check-box").empty().append(f(t))
        },
        termStr: function() {
            return o('ã€Š<a href="{0}" target="_blank">{1}</a>ã€‹', this.rootslash() + "/terms", this.vipServiceStr)
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        onCreated: function() {
            this.apower = apower, this.setLangPrice()
        },
        getBuyLinkOption: function() {
            return this.setLangPrice(), this.priceObj
        },
        handleTrem: function() {
            this.checkTerm.checked ? this.el.find(".bill").removeAttr("disabled") : this.el.find(".bill").attr("disabled", !0)
        },
        pagesStr: function(t) {
            return o("{0} pages@@002118", t)
        },
        setLangPrice: function() {
            var t = r.link[apower.getShortRegion(apower.lang)];
            null == t && (t = r.link.en);
            var e = JSON.parse(JSON.stringify(t));
            delete e[4], this.priceObj = e
        },
        init: function() {
            this.el.on("click", ".type-btn", this.btnClick.bind(this)), this.el.on("click", ".bill", this.billBtnOnClick.bind(this)), this.getAcceptStr(), this.autoSelect(), this.nickNameEl.text(apower.user.getName())
        },
        autoSelect: function() {
            this.el.find('.type-btn[goods-type="2"]').addClass("active"), this.setBillBtnLink(2)
        },
        btnClick: function(t) {
            f(t.currentTarget).addClass("active").siblings().removeClass("active");
            var e = f(t.currentTarget).index();
            this.setBillBtnLink(e + 1)
        },
        setBillBtnLink: function(t) {
            t = t || 1;
            var e = this.priceObj[t];
            this.payLink = e.link, this.el.find(".bill").attr("href", this.linkWithToken(e.link)), this.priceStr = e.priceStr, this.setPreferenti(t), this.el.find(".price").html(o("<p>{0}<span>{1}</span></p>", this.priceStr, ""))
        },
        linkWithToken: function(t) {
            var e = "",
                i = f.store.get("account_id_token"),
                n = f.store.get("account_api_token");
            return "zh" == apower.lang && i && !i.startsWith("-") && (e += "&identity_token=" + encodeURIComponent(i), e += "&api_token=" + encodeURIComponent(n)), t + e
        },
        setPreferenti: function(t) {
            if (1 == t) return this.preferentiStr = "", void this.el.find(".price span").text(this.preferentiStr);
            var e = this.priceObj[1],
                i = this.priceObj[t],
                n = (n = e.price / e.pages * i.pages - i.price).toFixed(2);
            this.preferentiStr = 0 < n ? o("(Save {0})@@002148", o(e.priceStr.replace(/\d+\.\d+|\d+/, "{0}"), n)) : "", this.el.find(".price span").text(this.preferentiStr)
        },
        billBtnOnClick: function() {
            var t = f.newComponent("pay-vip-result", {
                payurl: this.payLink
            });
            this.hide(), t.show()
        }
    }), f.registerComponent("pay-vip-result", "win", {
        template: '\n\t\t<nav class="win pay-vip-result">\n\t\t\t<div class="pay-vip-result-win">\n\t\t\t\t<h2>Please complete the payment in the newly-opened page@@002135</h2>\n\t\t\t\t<div class="tip-box">\n\t\t\t\t\t<p>Please donâ€™t close this window before the payment done@@002136</p>\n\t\t\t\t\t<p>Once the order is made, click the button below as per your need@@002137</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="check-status-box" hidden>\n\t\t\t\t\t<div class="bg-box">\n\t\t\t\t\t\t<p class="seconds">60s</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class="wait-txt">Searching...@@002138</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="no-update" hidden>\n\t\t\t\t\t<p class="wait-txt">Sorry, we have not found your payment information!@@002139</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="btn-box">\n\t\t\t\t\t<a class="type-btn active" ref="payOkBtn">Finished@@002140</a>\n\t\t\t\t\t<a class="type-btn" ref="reCheckBtn" hidden>Requery@@002141</a>\n\t\t\t\t\t<a class="type-btn" :attr.href="payurl" target="_blank" ref="rePayBtn">Repay@@002142</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        priceObj: null,
        timeDown: 60,
        isTimeDown: 0,
        payurl: "",
        ocr_vip: 0,
        ocr_balance: 0,
        ocr_consumed: 0,
        timer: null,
        timerQuery: null,
        isClose: 0,
        onCreated: function() {
            this.apower = apower
        },
        init: function() {
            this.payOkBtn.on("click", this.payOkOnClick.bind(this)), this.rePayBtn.on("click", this.rePayOnClick.bind(this)), this.reCheckBtn.on("click", this.payOkOnClick.bind(this))
        },
        payOkOnClick: function() {
            this.isTimeDown || (this.isTimeDown = 1, this.addTimeDown(), this.showTimeDown())
        },
        showTimeDown: function() {
            this.el.find(".tip-box").hide(), this.el.find(".btn-box").hide(), this.el.find(".check-status-box").show(), this.reCheckBtn.hide()
        },
        addTimeDown: function() {
            this.timer = a.timer(this.txtDown, 1e3, this), a.addTimer(this.timer), this.timerQuery = a.timer(this.getVipInfo, 5e3, this), a.addTimer(this.timerQuery)
        },
        txtDown: function() {
            this.timeDown--, this.timeDown < 0 && (this.timeDown = 60, this.delTimer(), this.showNoUpdate()), this.el.find(".seconds").text(this.timeDown + "s")
        },
        delTimer: function() {
            this.timer && a.delTimer(this.timer.id), this.timerQuery && a.delTimer(this.timerQuery.id), this.isTimeDown = 0
        },
        showNoUpdate: function() {
            this.reCheckBtn.show(), this.payOkBtn.hide(), this.el.find(".btn-box").show(), this.el.find(".check-status-box").hide()
        },
        getVipInfo: function() {
            this.isClose || pdf.getVipInfo(this.vipInfoBack, this.ocrInfoErr, this)
        },
        vipInfoBack: function(t) {
            this.isClose || (pdf.setVipInfo(t.data.is_activated, t.data.expired_at), pdf.vipInfo.is_vip && this.whenCloseWin())
        },
        ocrInfoErr: function() {},
        rePayOnClick: function() {},
        whenCloseWin: function() {
            this.isClose = 1, this.delTimer(), this.hide()
        }
    }), f.registerComponent("file-title", {
        template: "\n\t\t<h1>File@@001686</h1>\n\t"
    }), f.registerComponent("version-compare", {
        template: '\n\t\t\t<div class="version-compare">\n\t\t\t\t<h2>LightPDF Accounts@@001658</h2>\n\t\t\t\t<p class="des">Manage PDF files with ease. Check our different account types.@@001659</p>\n\n\t\t\t\t<div class="compare-box">\n\t\t\t\t\t<div class="compare-box-title">\n\t\t\t\t\t\t<div class="table-a table-item">Features@@001660</div>\n\t\t\t\t\t\t<div class="table-b table-item">LightPDF VIP Membership@@001653</div>\n\t\t\t\t\t\t<div class="table-c table-item">Desktop PDF Converter@@001661</div>\n\t\t\t\t\t\t<div class="table-d table-item">Free Membership@@001662</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="item-box" ref="itemBox">\n\t\t\t\t\t\t<div class="compare-box-item" f-for="item of dataArr">\n\t\t\t\t\t\t\t<div class="table-a table-item">\n\t\t\t\t\t\t\t\t<p class="server-name">{{item[0]}}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class="table-b table-item">{{item[2]}}</div>\n\t\t\t\t\t\t\t<div class="table-c table-item">{{item[3]}}</div>\n\t\t\t\t\t\t\t<div class="table-d table-item">{{item[4]}}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',
        dataArr: [
            [o("Batch Convert@@001937"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("Unavailable@@001677")],
            [o("Convert from PDF@@001671"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Convert to PDF@@001673"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Merge PDF@@002082"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5@@001675")],
            [o("Edit PDF@@002088"), o(""), o("Unlimited@@001672"), o("Unavailable@@001677"), o("5M")],
            [o("Protect PDF@@002084"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Unlock PDF@@001678"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Watermark PDF@@002086"), o(""), o("Unlimited@@001672"), o("Unavailable@@001677"), o("5M")],
            [o("Sign PDF@@002087"), o(""), o("Unlimited@@001672"), o("Unavailable@@001677"), o("5M")],
            [o("Split PDF@@002083"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Compress PDF@@002093"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("5M")],
            [o("Rotate PDF@@002095"), o(""), o("Unlimited@@001672"), o("Unavailable@@001677"), o("5M")],
            [o("OCR Basic@@002108"), o(""), o("Unlimited@@001672"), o("Unlimited@@001672"), o("Unlimited@@001672")]
        ],
        btnStr: '<div class="compare-box-item">\n\t\t\t\t<div class="table-a table-item">\n\t\t\t\t\t<div class="btn"></div>\n\t\t\t\t</div>\n\t\t\t\t<div class="table-b table-item" style="border-bottom: 2px solid #4285f4;"><a class="drop-area-button" @click="showJoinVip" href="javascript:void(0);">Join VIP@@002145</a></div>\n\t\t\t\t<div class="table-c table-item"><a href="{{pdfConverterUrl}}" target="_blank" class="drop-area-button">Download@@002071</a></div>\n\t\t\t\t<div class="table-d table-item"><a href="{{rootslash()}}/" class="drop-area-button">Start@@001664</a></div>\n\t\t</div>',
        ocrStr: '\n\t\t\t<div class="compare-box-item ocr-vip-item">\n\t\t\t\t<div class="table-a table-item">\n\t\t\t\t<p class="server-name">{{ocrArr[0]}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="table-b table-item two-line">\n\t\t\t\t\t<p class="server-name">{{ocrArr[2]}}</p>\n\t\t\t\t\t<a class="server-des" href="{{rootslash()}}/my-ocr" target="_blank" title="{{moreStr}}">{{moreStr}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="table-c table-item two-line">\n\t\t\t\t\t<p class="server-name">{{ window.$.env.isMobile ? \'\' : ocrArr[3]}}</p>\n\t\t\t\t\t<a class="server-des" href="{{rootslash()}}/my-ocr" target="_blank" title="{{moreStr}}">{{moreStr}}</a>\n\t\t\t\t</div>\n\t\t\t\t<div class="table-d table-item two-line">\n\t\t\t\t\t<p class="server-name">{{ocrArr[4]}}</p>\n\t\t\t\t\t<a class="server-des" href="{{rootslash()}}/my-ocr" target="_blank" title="{{moreStr}}">{{moreStr}}</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t',
        moreStr: o("Learn more@@001679"),
        pdfConverterUrl: pdf.pdfConverterUrl,
        joinPdfVip: null,
        ocrArr: [o("OCR VIP@@002104"), o("Pages@@001680"), o("Unavailable@@001677"), o("Unavailable@@001677"), o("Unavailable@@001677")],
        listened: 0,
        init: function() {
            this.itemBox.append(this.createFromTemplate(this.ocrStr)), this.itemBox.append(this.createFromTemplate(this.btnStr)), window.$.env.isMobile && (this.addImgClass(), this.clearTrText())
        },
        clearTrText: function() {
            var r = this;
            this.dataArr.forEach(function(t, e) {
                for (var i = 2, n = t.length; i < n; i++) {
                    var s = t[i];
                    s !== o("Unlimited@@001672") && s !== o("Unavailable@@001677") || (r.dataArr[e][i] = "")
                }
            }), this.ocrArr.forEach(function(t, e) {
                t !== o("Unlimited@@001672") && t !== o("Unavailable@@001677") || (r.ocrArr[e] = "")
            })
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        toSignIn: function() {
            var t = apower.user;
            t && !this.listened && (this.listened = 1, t.on("logined", this.onLogined, this)), apower.user.isLogined() || f.newComponent("login").show()
        },
        onLogined: function() {
            pdf.pdfsessionQuery.getPdfSesstion(this.sessionBack, this.sessionErr, this)
        },
        sessionBack: function() {},
        sessionErr: function() {},
        showJoinVip: function() {
            apower.user.isLogined() ? this.toJoinVip() : this.toSignIn()
        },
        toJoinVip: function() {
            f.newComponent("buy-pdf-vip").show()
        },
        hasEmail: function() {
            var t = apower.user;
            return t && t.info && t.info.email && -1 != t.info.email.indexOf("@") || t && t.info && t.info.telephone && 1 < t.info.telephone.length
        },
        addImgClass: function() {
            var n = this.itemBox.find(".compare-box-item");
            this.dataArr.forEach(function(t, i) {
                t.forEach(function(t, e) {
                    t === o("Unlimited@@001672") ? n.eq(i).children().eq(e - 1).addClass("ok") : t === o("Unavailable@@001677") && n.eq(i).children().eq(e - 1).addClass("stop")
                })
            });
            for (var t = n.eq(n.length - 2).children(".two-line"), e = 2, i = this.ocrArr.length; e < i; e++) {
                var s = this.ocrArr[e];
                s === o("Unlimited@@001672") ? t.eq(e - 2).children().eq(0).addClass("ok") : s === o("Unavailable@@001677") && t.eq(e - 2).children().eq(0).addClass("stop")
            }
        }
    }), f.registerComponent("buy-ocr-vip", "win", {
        template: '\n\t\t<nav class="win buy-ocr">\n\t\t\t<div class="buy-ocr-win">\n\t\t\t\t<div class="left-box">\n\t\t\t\t\t<div class="logo"></div>\n\t\t\t\t\t<div class="ocr-title">\n\t\t\t\t\t\t<h2>OCR VIP@@002127</h2>\n\t\t\t\t\t\t<div class="ocr-line"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2 class="feature">Keep the layout of the original file@@002128</h2>\n\t\t\t\t\t<h2 class="feature">Higher accuracy@@002129</h2>\n\t\t\t\t\t<h2 class="feature">Support multiple language recognition@@002130</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="right-box">\n\t\t\t\t\t<div class="top-box">\n\t\t\t\t\t\t<h2 class="nick-name" ref="nickNameEl">{{nickNameStr}}</h2>\n\t\t\t\t\t\t<h2 class="des">OCR VIP@@002127</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bottom-box">\n\t\t\t\t\t\t<p class="des">VIP members enjoy LightPDF best recognition service@@002131</p>\n\t\t\t\t\t\t<div class="btn-box">\n\t\t\t\t\t\t<a f-for="item,value in getBuyLinkOption()" :attr.goods-type="item" class="type-btn">\n\t\t\t\t\t\t\t{{value.priceStr}}/{{pagesStr(value.pages)}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="agreement">\n\t\t\t\t\t\t\t<checkbox-term :checked="true" ref="checkTerm" @change="handleTrem"></checkbox-term>\n\t\t\t\t\t\t\t\t<div class="check-box">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t<p>{{priceStr}}<span>{{preferentiStr}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="bill" href="" target="_blank">Place order@@002147</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        priceObj: null,
        payLink: "",
        priceStr: "",
        preferentiStr: "",
        nickNameStr: apower.user.getName(),
        vipServiceStr: o("Terms@@002132"),
        vipMonthStr: o("è¿žç»­åŒ…æœˆæœåŠ¡æ¡æ¬¾@@002133"),
        acceptStr: "",
        getAcceptStr: function() {
            var t = o("<p>{0}<p>", o("I have read and agreed with {0}@@002134", this.termStr()));
            this.el.find(".agreement .check-box").empty().append(f(t))
        },
        termStr: function() {
            return o('ã€Š<a href="{0}" target="_blank">{1}</a>ã€‹', this.rootslash() + "/terms", this.vipServiceStr)
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        handleTrem: function() {
            this.checkTerm.checked ? this.el.find(".bill").removeAttr("disabled") : this.el.find(".bill").attr("disabled", !0)
        },
        onCreated: function() {
            this.apower = apower, this.setLangPrice()
        },
        getBuyLinkOption: function() {
            return this.setLangPrice(), this.priceObj
        },
        pagesStr: function(t) {
            return o("{0} pages@@002118", t)
        },
        setLangPrice: function() {
            var t = c.link[apower.getShortRegion(apower.lang)];
            null == t && (t = c.link.en);
            var e = JSON.parse(JSON.stringify(t));
            delete e[3], this.priceObj = e
        },
        init: function() {
            this.el.on("click", ".type-btn", this.btnClick.bind(this)), this.el.on("click", ".bill", this.billBtnOnClick.bind(this)), this.getAcceptStr(), this.autoSelect(), this.nickNameEl.text(apower.user.getName())
        },
        autoSelect: function() {
            this.el.find('.type-btn[goods-type="2"]').addClass("active"), this.setBillBtnLink(2)
        },
        btnClick: function(t) {
            f(t.currentTarget).addClass("active").siblings().removeClass("active");
            var e = f(t.currentTarget).index(),
                e = f(t.currentTarget).attr("goods-type");
            this.setBillBtnLink(e)
        },
        setBillBtnLink: function(t) {
            t = t || 1;
            var e = this.priceObj[t];
            this.payLink = e.link, this.el.find(".bill").attr("href", this.linkWithToken(e.link)), this.priceStr = e.priceStr, this.setPreferenti(t), this.el.find(".price").html(o("<p>{0}<span>{1}</span></p>", this.priceStr, this.preferentiStr))
        },
        linkWithToken: function(t) {
            var e = "",
                i = f.store.get("account_id_token"),
                n = f.store.get("account_api_token");
            return "zh" == apower.lang && i && !i.startsWith("-") && (e += "&identity_token=" + encodeURIComponent(i), e += "&api_token=" + encodeURIComponent(n)), t + e
        },
        setPreferenti: function(t) {
            if (1 == t) return this.preferentiStr = "", void this.el.find(".price span").text(this.preferentiStr);
            var e = this.priceObj[1],
                i = this.priceObj[t],
                n = (n = e.price / e.pages * i.pages - i.price).toFixed(2);
            this.preferentiStr = 0 < n ? o("(Save {0})@@002148", o(e.priceStr.replace(/\d+\.\d+|\d+/, "{0}"), n)) : "", this.el.find(".price span").text(this.preferentiStr)
        },
        billBtnOnClick: function() {
            f.newComponent("pay-result", {
                payurl: this.payLink
            }).show(), this.hide()
        }
    }), f.registerComponent("buy-ocr-vip-store", "win", {
        template: '\n\t\t<nav class="win buy-ocr" ref="ocrVipStore">\n\t\t\t<div class="buy-ocr-win" ref="box">\n\t\t\t\t<div class="left-box" ref="left">\n\t\t\t\t\t<div class="logo"></div>\n\t\t\t\t\t<div class="ocr-title">\n\t\t\t\t\t\t<h2>OCR VIP@@002127</h2>\n\t\t\t\t\t\t<div class="ocr-line"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2 class="feature">Keep the layout of the original file@@002128</h2>\n\t\t\t\t\t<h2 class="feature">Higher accuracy@@002129</h2>\n\t\t\t\t\t<h2 class="feature">Support multiple language recognition@@002130</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="right-box" ref="rigth">\n\t\t\t\t\t<div class="top-box">\n\t\t\t\t\t\t<h2 class="nick-name" ref="nickNameEl">{{nickNameStr}}</h2>\n\t\t\t\t\t\t<h2 class="des">OCR VIP@@002127</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bottom-box">\n\t\t\t\t\t\t<p class="des">VIP members enjoy LightPDF best recognition service@@002131</p>\n\t\t\t\t\t\t<div class="btn-box">\n\t\t\t\t\t\t<a f-for="item,value in getBuyLinkOption()" :attr.goods-type="item" :attr.goods-index="11" class="type-btn">\n\t\t\t\t\t\t\t{{value.priceStr}}/{{pagesStr(value.pages)}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="agreement">\n\t\t\t\t\t\t\t<checkbox-term :checked="true" ref="checkTerm" @change="handleTrem"></checkbox-term>\n\t\t\t\t\t\t\t\t<div class="check-box">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t<p>{{priceStr}}<span>{{preferentiStr}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="bill" href="javascript:void(0);" @click="clickPay">Place order@@002147</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        priceObj: null,
        payLink: "",
        priceStr: "",
        preferentiStr: "",
        nickNameStr: apower.user.getName(),
        vipServiceStr: o("Terms@@002132"),
        vipMonthStr: o("è¿žç»­åŒ…æœˆæœåŠ¡æ¡æ¬¾@@002133"),
        acceptStr: "",
        ocr_vip: 0,
        ocr_balance: 0,
        ocr_consumed: 0,
        getAcceptStr: function() {
            var t = o("<p>{0}<p>", o("I have read and agreed with {0}@@002134", this.termStr()));
            this.el.find(".agreement .check-box").empty().append(f(t))
        },
        termStr: function() {
            return o('ã€Š<a href="{0}" target="_blank">{1}</a>ã€‹', this.rootslash() + "/terms", this.vipServiceStr)
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        handleTrem: function() {
            this.checkTerm.checked ? this.el.find(".bill").removeAttr("disabled") : this.el.find(".bill").attr("disabled", !0)
        },
        onCreated: function() {
            this.apower = apower, this.setLangPrice()
        },
        getBuyLinkOption: function() {
            return this.setLangPrice(), this.priceObj
        },
        pagesStr: function(t) {
            return o("{0} pages@@002118", t)
        },
        setLangPrice: function() {
            var t = c.link[apower.getShortRegion(apower.lang)];
            null == t && (t = c.link.en);
            var e = JSON.parse(JSON.stringify(t));
            delete e[3], this.priceObj = e
        },
        init: function() {
            this.el.on("click", ".type-btn", this.btnClick.bind(this)), this.getAcceptStr(), this.autoSelect(), this.nickNameEl.text(apower.user.getName()), f.env.isMobile && this.box.append(this.left)
        },
        autoSelect: function() {
            this.el.find('.type-btn[goods-type="2"]').addClass("active"), this.setBillBtnLink(2)
        },
        btnClick: function(t) {
            f(t.currentTarget).addClass("active").siblings().removeClass("active");
            var e = f(t.currentTarget).index(),
                e = f(t.currentTarget).attr("goods-type");
            this.setBillBtnLink(e)
        },
        setBillBtnLink: function(t) {
            t = t || 1;
            var e = this.priceObj[t];
            this.payLink = e.link, this.priceStr = e.priceStr, this.setPreferenti(t), this.el.find(".price").html(o("<p>{0}<span>{1}</span></p>", this.priceStr, this.preferentiStr))
        },
        clickPay: function() {
            apower.user.isLogined() ? (this.checkOcrVip(), this.openLink(), this.billBtnOnClick()) : this.toSignIn()
        },
        toSignIn: function() {
            apower.user.isLogined() || (pdf.on("sessions-update", this.sessonOk, this), this.loginPanel = f.newComponent("login"), this.loginPanel.on("logined", this.onLogined, this), this.loginPanel.show())
        },
        sessonOk: function() {
            this.checkOcrVip()
        },
        openLink: function() {
            window.open(this.linkWithToken(this.payLink))
        },
        onLogined: function() {},
        checkOcrVip: function() {
            pdf.getOcrVipInfo(this.checkOcrVipBack, this.checkOcrVipErr, this)
        },
        checkOcrVipBack: function(t) {
            t.data.ocr && (this.ocr_vip = t.data.durations ? 1 : 0, this.ocr_balance = t.data.durations, this.ocr_consumed = t.data.ocr.ocr_consumed)
        },
        checkOcrVipErr: function() {
            this.ocr_vip = 0, this.ocr_balance = 0, this.ocr_consumed = 0
        },
        linkWithToken: function(t) {
            var e = "",
                i = f.store.get("account_id_token"),
                n = f.store.get("account_api_token");
            return "zh" == apower.lang && i && !i.startsWith("-") && (e += "&identity_token=" + encodeURIComponent(i), e += "&api_token=" + encodeURIComponent(n)), t + e
        },
        setPreferenti: function(t) {
            if (1 == t) return this.preferentiStr = "", void this.el.find(".price span").text(this.preferentiStr);
            var e = this.priceObj[1],
                i = this.priceObj[t],
                n = (n = e.price / e.pages * i.pages - i.price).toFixed(2);
            this.preferentiStr = 0 < n ? o("(Save {0})@@002148", o(e.priceStr.replace(/\d+\.\d+|\d+/, "{0}"), n)) : "", this.el.find(".price span").text(this.preferentiStr)
        },
        billBtnOnClick: function() {
            var t = f.newComponent("pay-result-ocr", {
                payurl: this.payLink
            });
            this.hide(), t.show()
        }
    }), f.registerComponent("pay-result-ocr", "win", {
        template: '\n\t\t<nav class="win pay-result">\n\t\t\t<div class="pay-result-win">\n\t\t\t\t<h2>Please complete the payment in the newly-opened page@@002135</h2>\n\t\t\t\t<div class="tip-box">\n\t\t\t\t\t<p>Please donâ€™t close this window before the payment done@@002136</p>\n\t\t\t\t\t<p>Once the order is made, click the button below as per your need@@002137</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="check-status-box" hidden>\n\t\t\t\t\t<div class="bg-box">\n\t\t\t\t\t\t<p class="seconds">60s</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p class="wait-txt">Searching...@@002138</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="no-update" hidden>\n\t\t\t\t\t<p class="wait-txt">Sorry, we have not found your payment information!@@002139</p>\n\t\t\t\t</div>\n\t\t\t\t<div class="btn-box">\n\t\t\t\t\t<a class="type-btn active" ref="payOkBtn">Finished@@002140</a>\n\t\t\t\t\t<a class="type-btn" ref="reCheckBtn" hidden>Requery@@002141</a>\n\t\t\t\t\t<a class="type-btn" :attr.href="payurl" target="_blank" ref="rePayBtn">Repay@@002142</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        target: "body",
        priceObj: null,
        timeDown: 60,
        isTimeDown: 0,
        payurl: "",
        ocr_vip: 0,
        ocr_balance: 0,
        ocr_consumed: 0,
        oldOcr: {
            ocr_vip: 0,
            ocr_balance: 0
        },
        timer: null,
        timerQuery: null,
        isClose: 0,
        onCreated: function() {
            this.apower = apower, this.getOldOcrVipInfo()
        },
        init: function() {
            this.payOkBtn.on("click", this.payOkOnClick.bind(this)), this.rePayBtn.on("click", this.rePayOnClick.bind(this)), this.reCheckBtn.on("click", this.payOkOnClick.bind(this))
        },
        payOkOnClick: function() {
            this.isTimeDown || (this.isTimeDown = 1, this.addTimeDown(), this.showTimeDown())
        },
        showTimeDown: function() {
            this.el.find(".tip-box").hide(), this.el.find(".btn-box").hide(), this.el.find(".check-status-box").show(), this.reCheckBtn.hide()
        },
        addTimeDown: function() {
            this.timer = a.timer(this.txtDown, 1e3, this), a.addTimer(this.timer), this.timerQuery = a.timer(this.getOcrVipInfo, 5e3, this), a.addTimer(this.timerQuery)
        },
        txtDown: function() {
            this.timeDown--, this.timeDown < 0 && (this.timeDown = 60, this.delTimer(), this.showNoUpdate()), this.el.find(".seconds").text(this.timeDown + "s")
        },
        delTimer: function() {
            this.timer && a.delTimer(this.timer.id), this.timerQuery && a.delTimer(this.timerQuery.id), this.isTimeDown = 0
        },
        showNoUpdate: function() {
            this.reCheckBtn.show(), this.payOkBtn.hide(), this.el.find(".btn-box").show(), this.el.find(".check-status-box").hide()
        },
        getOldOcrVipInfo: function() {
            pdf.getOcrVipInfo(this.oldOcrInfoBack, this.oldOcrInfoErr, this)
        },
        oldOcrInfoBack: function(t) {
            t.data && (this.oldOcr.ocr_vip = t.data.durations ? 1 : 0, this.oldOcr.ocr_balance = t.data.durations)
        },
        oldOcrInfoErr: function() {
            this.oldOcr.ocr_vip = 0, this.oldOcr.ocr_balance = 0
        },
        getOcrVipInfo: function() {
            this.isClose || pdf.getOcrVipInfo(this.ocrInfoBack, this.ocrInfoErr, this)
        },
        ocrInfoBack: function(t) {
            this.isClose || (t.data && (this.ocr_vip = t.data.durations ? 1 : 0, this.ocr_balance = t.data.durations), this.ocr_balance > this.oldOcr.ocr_balance && this.whenCloseWin())
        },
        ocrInfoErr: function() {},
        rePayOnClick: function() {},
        whenCloseWin: function() {
            this.isClose = 1, this.delTimer(), this.hide()
        }
    }), f.registerComponent("buy-pdf-vip-store", "buy-pdf-vip", {
        template: '\n\t\t<nav class="win buy-pdf">\n\t\t\t<div class="buy-pdf-win" ref="box">\n\t\t\t\t<div class="left-box" ref="left">\n\t\t\t\t\t<div class="logo"></div>\n\t\t\t\t\t<div class="ocr-title">\n\t\t\t\t\t\t<h2>LightPDF VIP@@001683</h2>\n\t\t\t\t\t\t<div class="ocr-line"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<h2 class="feature">Convert PDF without limitation@@001654</h2>\n\t\t\t\t\t<h2 class="feature">Edit PDF without limitation@@001655</h2>\n\t\t\t\t\t<h2 class="feature">Use full functions (except OCR) without limitation@@001656</h2>\n\t\t\t\t</div>\n\t\t\t\t<div class="right-box" ref="right">\n\t\t\t\t\t<div class="top-box">\n\t\t\t\t\t\t<h2 class="nick-name" ref="nickNameEl">{{nickNameStr}}</h2>\n\t\t\t\t\t\t<h2 class="des">LightPDF VIP@@001683</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="bottom-box">\n\t\t\t\t\t\t<p class="des">LightPDF VIP Membership enjoys LightPDF conversion and editing service without limitation@@001657</p>\n\t\t\t\t\t\t<div class="btn-box">\n\t\t\t\t\t\t<a f-for="item,value in getBuyLinkOption()" :attr.goods-type="item" class="type-btn">\n\t\t\t\t\t\t\t<span class="red-price">{{value.priceStr}}</span>/{{value.title}}\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="agreement">\n\t\t\t\t\t\t<checkbox-term :checked="true" ref="checkTerm" @change="handleTrem"></checkbox-term>\n\t\t\t\t\t\t\t<div class="check-box">\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="price">\n\t\t\t\t\t\t\t<p>{{priceStr}}<span>{{preferentiStr}}</span></p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<a class="bill-url" href="" target="_blank" hidden></a>\n\t\t\t\t\t\t<a class="bill" href="javascript:void(0);"  @click="clickPay">Place order@@002147</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</nav>\n\t',
        init: function() {
            this.el.on("click", ".type-btn", this.btnClick.bind(this)), this.getAcceptStr(), this.autoSelect(), this.nickNameEl.text(apower.user.getName()), f.env.isMobile && this.box.append(this.left)
        },
        setBillBtnLink: function(t) {
            t = t || 1;
            var e = this.priceObj[t];
            this.payLink = e.link, this.el.find(".bill-url").attr("href", this.linkWithToken(e.link)), this.priceStr = e.priceStr, this.setPreferenti(t), this.el.find(".price").html(o("<p>{0}<span>{1}</span></p>", this.priceStr, ""))
        },
        clickPay: function() {
            apower.user.isLogined() ? (this.openLink(), this.billBtnOnClick()) : this.toSignIn()
        },
        toSignIn: function() {
            apower.user.isLogined() || (this.loginPanel = f.newComponent("login"), this.loginPanel.on("logined", this.onLogined, this), this.loginPanel.show())
        },
        openLink: function() {
            this.el.find(".bill-url").attr("href", this.linkWithToken(this.payLink)), window.open(this.linkWithToken(this.payLink))
        },
        onLogined: function() {}
    }), f.registerComponent("header-store-vip-entry", {
        template: '\n\t\t<li class="store" @click="onClickVip"><a href="{{buyVipUrl}}" >Store@@002160</a></li>\n\t',
        template2: '\n\t\t<li class="has-sub aa"><div class="sub-title">Store@@002160</div></li>\n\t',
        listened: 0,
        loginPanel: null,
        buyVipUrl: "javascript:void(0);",
        buyOcrUrl: "javascript:void(0);",
        init: function() {
            pdf.isVipLink() && (this.buyVipUrl = this.rootslash() + "/buy-vip")
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        onClickVip: function() {
            pdf.isVipLink() || this.showBuyPdfVip()
        },
        onClickOcrVip: function() {
            pdf.isOcrLink() || this.showBuyOcrVip()
        },
        showBuyPdfVip: function() {
            f.newComponent("buy-pdf-vip-store").show()
        },
        showBuyOcrVip: function() {
            f.newComponent("buy-ocr-vip-store").show()
        },
        toSignIn: function(t) {
            apower.user && !this.listened && (this.listened = t), apower.user.isLogined() || (this.loginPanel = f.newComponent("login"), this.loginPanel.on("logined", this.onLogined, this), this.loginPanel.show())
        },
        onLogined: function() {
            this.loginPanel = null, 1 == this.listened ? this.showBuyPdfVip() : 2 == this.listened && this.showBuyOcrVip()
        }
    }), f.registerComponent("header-ocr-menu", {
        template: '\n\t\t<ul class="header-store-entry">\n\t\t\t<li class="nav-popup-minicon"><a href="{{rootslash()}}/ocr">OCR</a></li>\n\t\t\t<li class="nav-popup-minicon" @click="onClickOcrVip"><a href="{{buyOcrUrl}}" >OCR VIP@@002113</a></li>\n\t\t</ul>\n\t',
        listened: 0,
        loginPanel: null,
        buyOcrUrl: "javascript:void(0);",
        init: function() {
            pdf.isOcrLink() && (this.buyOcrUrl = this.rootslash() + "/buy-ocr")
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        onClickOcrVip: function() {
            pdf.isOcrLink() || this.showBuyOcrVip()
        },
        showBuyOcrVip: function() {
            f.newComponent("buy-ocr-vip-store").show()
        }
    }), f.registerComponent("header-store-menu", {
        template: '\n\t\t<ul class="header-store-entry">\n\t\t\t<li class="nav-popup-minicon" @click="onClickOcrVip"><a href="{{buyOcrUrl}}" >OCR VIP@@002113</a></li>\n\t\t\t<li class="nav-popup-minicon" @click="onClickVip"><a href="{{buyVipUrl}}" >LightPDF VIP@@001683</a></li>\n\t\t\t<li class="nav-popup-minicon"><a href="{{rootslash()}}/version-compare">Upgrade@@001688</a></li>\n\t\t</ul>\n\t',
        listened: 0,
        loginPanel: null,
        buyVipUrl: "javascript:void(0);",
        buyOcrUrl: "javascript:void(0);",
        init: function() {
            pdf.isVipLink() && (this.buyVipUrl = this.rootslash() + "/buy-vip"), pdf.isOcrLink() && (this.buyOcrUrl = this.rootslash() + "/buy-ocr")
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        onClickVip: function() {
            pdf.isVipLink() || this.showBuyPdfVip()
        },
        onClickOcrVip: function() {
            pdf.isOcrLink() || this.showBuyOcrVip()
        },
        showBuyPdfVip: function() {
            f.newComponent("buy-pdf-vip-store").show()
        },
        showBuyOcrVip: function() {
            f.newComponent("buy-ocr-vip-store").show()
        },
        toSignIn: function(t) {
            apower.user && !this.listened && (this.listened = t), apower.user.isLogined() || (this.loginPanel = f.newComponent("login"), this.loginPanel.on("logined", this.onLogined, this), this.loginPanel.show())
        },
        onLogined: function() {
            this.loginPanel = null, 1 == this.listened ? this.showBuyPdfVip() : 2 == this.listened && this.showBuyOcrVip()
        }
    }), f.registerComponent("out-of-use-limit", "win", {
        template: '\n\t\t<nav></nav>\n\t',
        target: "body",
        isLogined: !1,
        buyVipUrl: "javascript:void(0);",
        downloadAppUrl: pdf.pdfEditorUrl,
        onCreated: function() {
            this.apower = apower, this.isLogined = apower.user.isLogined()
        },
        init: function() {
            pdf.isVipLink() && (this.buyVipUrl = this.rootslash() + "/buy-vip")
        },
        rootslash: function() {
            return apower.getRegionPath(apower.lang)
        },
        login: function() {
            apower.user.isLogined() || f.newComponent("login").show(), this.hide()
        }
    }), f.registerComponent("purchase-guidance", {
        template: '\n\t<div></div>\n',
        choose: "yearly",
        monthLink: "javascript:void(0);",
        quarterLink: "javascript:void(0);",
        yearlyLink: "javascript:void(0);",
        clickBuyNow: !1,
        sale: {
            month: {},
            quarter: {},
            yearly: {}
        },
        init: function() {
            f(".main-wrapper").addClass("purchase-wrapper");
            var t = "zh" === apower.lang ? "zh" : "en",
                e = {
                    ar: "ar",
                    cs: "cz",
                    de: "de",
                    da: "dk",
                    en: "en",
                    es: "es",
                    fi: "fi",
                    fr: "fr",
                    el: "gr",
                    hu: "hu",
                    it: "it",
                    ja: "jp",
                    nl: "nl",
                    no: "no",
                    pl: "pl",
                    pt: "pt",
                    sv: "se",
                    tr: "tr",
                    tw: "tw",
                    zh: "zh"
                } [t],
                i = JSON.parse(JSON.stringify(priceObj.priceMap.link[e])),
                n = this.getCurrencySymbol(t);
            for (var s in n.isBeforeNumber ? (i[1].mPrice = n.currencySymbol + i[1].price, i[2].mPrice = n.currencySymbol + (i[2].price / 3).toFixed(2), i[3].mPrice = n.currencySymbol + (i[3].price / 12).toFixed(2)) : (i[1].mPrice = i[1].price + n.currencySymbol, i[2].mPrice = (i[2].price / 3).toFixed(2) + n.currencySymbol, i[3].mPrice = (i[3].price / 12).toFixed(2) + n.currencySymbol), i) i[s].link = i[s].link.replace("secure.2checkout.com", "shop.apowersoft.com");
            this.sale.month = i[1], this.sale.quarter = i[2], this.sale.yearly = i[3], this.lang = apower.lang, window.addEventListener("wx_inline_checkout_completed", function(t) {
                console.log(t);
                var e = "".concat(location.protocol, "//").concat(location.hostname).concat(apower.getRegionPath(apower.lang), "/vip");
                window.open(e)
            });
            var r = apower.user;
            r && (r.on("logout", this.onLogout, this), r.on("logined", this.onLogined, this))
        },
        onLogout: function() {
            this.monthLink = "javascript:void(0);", this.quarterLink = "javascript:void(0);", this.yearlyLink = "javascript:void(0);"
        },
        onLogined: function() {
            var t;
            this.getBuyLink(), this.el.find(".buy-now").attr("target", "_blank"), "month" === this.choose && (t = this.monthLink), "quarter" === this.choose && (t = this.quarterLink), "yearly" === this.choose && (t = this.yearlyLink), "zh" == apower.lang && this.clickBuyNow && (this.clickBuyNow = !1, window.open(t)), "zh" != apower.lang && this.clickBuyNow && wx_checkout && wx_checkout.checkout && (this.clickBuyNow = !1, wx_checkout.checkout(t))
        },
        getCurrencySymbol: function(t) {
            var e = {
                isBeforeNumber: !0,
                currencySymbol: "$"
            };
            switch (t) {
                case "zh":
                    e.currencySymbol = "ï¿¥";
                    break;
                case "ja":
                    e.isBeforeNumber = !1, e.currencySymbol = "å††";
                    break;
                case "tw":
                    e.currencySymbol = "NT$";
                    break;
                case "ar":
                case "en":
                case "pt":
                    e.currencySymbol = "$";
                    break;
                default:
                    e.isBeforeNumber = !1, e.currencySymbol = "â‚¬"
            }
            return e
        },
        getBuyLink: function() {
            "zh" == apower.lang ? (this.monthLink = this.sale.month.link, this.quarterLink = this.sale.quarter.link, this.yearlyLink = this.sale.yearly.link) : (this.monthLink = "https://buy.paddle.com/product/586274", this.quarterLink = "https://buy.paddle.com/product/586275", this.yearlyLink = "https://buy.paddle.com/product/586276");
            var t = f.store.get("account_id_token"),
                e = f.store.get("account_api_token"),
                i = f.store.get("account_user");
            "zh" == apower.lang && t && !t.startsWith("-") && (this.monthLink += "&identity_token=" + encodeURIComponent(t) + "&api_token=" + encodeURIComponent(e), this.quarterLink += "&identity_token=" + encodeURIComponent(t) + "&api_token=" + encodeURIComponent(e), this.yearlyLink += "&identity_token=" + encodeURIComponent(t) + "&api_token=" + encodeURIComponent(e)), "zh" == apower.lang && i && i.email && (this.monthLink += "&user_email=" + encodeURIComponent(i.email), this.quarterLink += "&user_email=" + encodeURIComponent(i.email), this.yearlyLink += "&user_email=" + encodeURIComponent(i.email))
        },
        showLoginWin: function(t) {
            if (!window.apower.user.getId()) return this.clickBuyNow = !0, f(t.currentTarget).removeAttr("target"), void apower.user.popupLoginWin();
            this.getBuyLink()
        }
    })
}(jQuery);

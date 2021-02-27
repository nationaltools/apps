(function($) {

  /* globals jQuery, lozad, ScrollMagic */

  "use strict";

  var  dictionary = {
    '.one'	: 'One Page',
    '.por'	: 'Portfolio',
    '.box'	: 'Boxed',
    '.blo'	: 'Blog',
    '.dar'	: 'Dark',
    '.sho'	: 'Shop',
    '.lig'	: 'Light',
    '.ele'	: 'Elementor',

    '.ani' : 'Animals & Nature',
    '.art' : 'Art & Culture',
    '.car' : 'Cars & Bikes',
    '.cor' : 'Corporations & Organizations',
    '.des' : 'Design & Photography',
    '.edu' : 'Education & Science',
    '.ent' : 'Entertainment',
    '.fas' : 'Fashion',
    '.fin' : 'Finance',
    '.foo' : 'Food & Restaurants',
    '.hea' : 'Health & Beauty',
    '.hou' : 'Housing & Architecture',
    '.mag' : 'Magazines & Writing',
    '.occ' : 'Occasions & Gifts',
    '.oth' : 'Others',
    '.peo' : 'People and services',
    '.pro' : 'Product & Production',
    '.spo' : 'Sports & Travel',
    '.tec' : 'Technology & Computing ',
  };

  var Splash = (function($) {

    var body = $('body');
    var header = $('#header');
    var websites = $('.websites');
    var websitesIso = $('.websites-iso');
    var search = $('input.search');
    var menu = $('#menu');

    var sidebar = false;
    var searchLock = false;
    var stickyOff = false;

    var headerH = 0;
    var previousY = 0;

    var getWebsitesOnce = false;
    var getWebsitesDone = $.Deferred();
    var isMobile = false;

    /**
     * Mobile
     */

    var mobile = {

      set: function() {

        headerH = header.height();

        if (window.innerWidth <= 777) {
          isMobile = true;
        } else {
          isMobile = false;
        }

        if (isMobile) {

          body.addClass('mobile');

          if (header.hasClass('filters-open')) {
            this.filtersSize();
          }

          this.filtersToHeader();

        } else {

          body.removeClass('mobile');

          this.filtersToContent();

        }

        if (header.hasClass('submenu-open')) {
          this.submenuSize();
        }

      },

      toggleMenu: function() {

        header.toggleClass('menu-open');
        header.removeClass('filters-open search-open');

        if (header.hasClass('submenu-open')) {
          this.submenuClose();
        }

      },

      menuClose: function(){

        header.removeClass('menu-open');
        this.submenuClose();

      },

      submenuOpen: function(el) {

        // open 2nd level
        el.closest('li').addClass('open');

        header.addClass('submenu-open');
        this.modalOpen();
        this.submenuSize();

      },

      submenuClose: function() {
        header.removeClass('submenu-open').find('li.open').removeClass('open');
        this.modalClose();
      },

      submenuSize: function() {
        header.find('li.open > ul').innerWidth(window.innerWidth).innerHeight(window.innerHeight - headerH);
      },

      modalOpen: function() {
        body.addClass('modal-open');
      },

      modalClose: function() {
        body.removeClass('modal-open');
      },

      searchToggle: function() {
        header.toggleClass('search-open');
        header.removeClass('filters-open menu-open submenu-open');
        this.modalClose();
      },

      filtersToggle: function() {
        header.toggleClass('filters-open');
        header.removeClass('search-open menu-open submenu-open');

        if (header.hasClass('filters-open')) {
          this.filtersSize();
          this.modalOpen();
        } else {
          this.modalClose();
        }

      },

      filtersClose: function() {
        header.removeClass('filters-open');
        this.modalClose();
      },

      filtersSize: function() {
        header.find('.filters').innerWidth(window.innerWidth).innerHeight(window.innerHeight - headerH);
      },

      filtersToHeader: function() {
        $('#websites .filters .sidebar__inner').detach().prependTo('#header .filters');
      },

      filtersToContent: function() {
        $('#header .filters .sidebar__inner').detach().prependTo('#websites .filters .inner-wrapper-sticky');
        sidebar.stickySidebar('updateSticky');
      }

    };

    /**
     * One page
     */

    var onePage = {

      positions: [],

      setPositions: function() {

        var $this = this;

        $('article[id]').each(function() {

          var article = $(this);
          var id = article.attr('id');

          $this.positions[id] = {
            top: article.offset().top,
            bottom: article.offset().top + article.height() - 1
          };

        });

      },

      scrollActive: function() {

        var active = false;
        var $this = this;

        var currentY = $(window).scrollTop();

        $('article[id]').each(function() {

          var article = $(this);
          var id = article.attr('id');

          if ((currentY >= $this.positions[id].top) && (currentY < $this.positions[id].bottom)) {
            active = id;
          }

        });

        $('#menu li').removeClass('active');

        if (active) {

          active = '[href="#' + active + '"]';

          $(active, '#menu').closest('li').addClass('active');

        }

      },

      click: function(link) {

        var el = link.closest('li');
        var hash = link.attr('href');

        el.addClass('active')
          .siblings().removeClass('active');

        if (!$(hash).length) {
          return false;
        }

        mobile.menuClose();

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200, 'swing');

      },

      scrollTo: function(el) {

        var hash = el.attr('href');

        mobile.menuClose();

        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 200);

      },

      scrollTop: function() {

        $('html, body').animate({
          scrollTop: 0
        }, 200);

      }

    };

    /**
     * Sticky header
     */

    var sticky = {

      websitesTop: 0,
      websitesBottom: 0,

      set: function() {

        this.websitesTop = $('#websites .search-wrapper').offset().top - 17;
        this.websitesBottom = websites.offset().top + websites.height() - headerH /* header height */ ;

      },

      scroll: function() {

        var currentY = $(window).scrollTop();

        if (!headerH) {
          // some JS has not been finished
          return false;
        }

        if (stickyOff) {
          return false;
        }

        if (searchLock) {

          header
            .removeClass('hide')
            .addClass('show sticky search animate');

        } else if (currentY <= 1) {

          // static header

          header
            .addClass('animate-bg')
            .removeClass('sticky hide show');

        } else if ((currentY >= this.websitesTop) && (currentY < this.websitesBottom)) {

          // menu or seach inside websites section

          header
            .removeClass('hide')
            .addClass('show sticky search animate');

          if (currentY > previousY) {
            header.addClass('search');
          } else {
            header.removeClass('search');
          }

        } else if (currentY <= headerH) {

          // header height - do nothing

        } else if (currentY < previousY) {

          // menu on scroll top

          header
            .removeClass('hide search')
            .addClass('show sticky animate');

        } else {

          header
            .removeClass('animate-bg show sticky')
            .addClass('hide');

        }

        previousY = currentY;

      },

    };

    /**
     * Search
     */

    var searchForm = {

      timer: false,

      search: function(value) {

        var filter = value.replace('&', '').replace(/ /g, '').toLowerCase();

        // TMP: temporary holiday filters

        if( 'christ' == filter || 'christmas' == filter ){
          filter = 'xmas';
        }

        if( 'new' == filter || 'newyear' == filter ){
          filter = 'party';
        }

        // end: TMP: temporary holiday filters

        isotope.scrollTop();

        search.val(value);

        if (filter) {
          body.addClass('search-active');
          header.addClass('search-open');
        } else {
          body.removeClass('search-active');
        }

        isotope.overlay('show');

        setTimeout(function(){

          getWebsites();

          $.when(getWebsitesDone).done(function(){

            websitesIso.isotope({
              filter: function() {
                return filter ? $(this).data('title').match(filter) : true;
              }
            });

            isotope.clear();
            isotope.result( filter );

          });

        }, 200);

      },

      searchTimer: function(input) {

        clearTimeout(this.timer);
        this.timer = setTimeout(function() {
          searchForm.search(input.val());
        }, 300, input);

      },

      clear: function() {

        search.val('');
        body.removeClass('search-active');

      }

    };

    /**
     * Isotope
     */

    var isotope = {

      currentFilters: [],

      concatValues: function(obj) {

        var value = '';
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
            value += obj[prop];
          }
        }
        return value;

      },

      init: function() {

        websitesIso.isotope({
          itemSelector: '.website',
          transitionDuration: 200,
          hiddenStyle: {
            opacity: 0
          },
          visibleStyle: {
            opacity: 1
          }
        }).isotope('reloadItems').isotope({
          sortBy: 'original-order'
        });

        websitesIso.on('layoutComplete', function() {
          recalculate();
        });

      },

      reset: function(li, group) {

        li.removeClass('current');
        this.currentFilters[group] = '';

        if (!this.currentFilters.layout && !this.currentFilters.subject) {
          body.removeClass('filter-active');
        }

        websitesIso.isotope({
          filter: this.concatValues(this.currentFilters)
        });

        this.result();

      },

      scrollTop: function() {

        searchLock = true;

        $('html, body').animate({
          scrollTop: websites.offset().top - 90
        }, 200);

        setTimeout(function() {
          searchLock = false;
        }, 250);

      },

      filter: function(el) {

        var li = el.closest('li');
        var group = el.closest('ul').data('filter-group');

        isotope.scrollTop();
        mobile.filtersClose();

        searchForm.clear();

        isotope.overlay('show');

        setTimeout(function(){

          getWebsites();

          $.when(getWebsitesDone).done(function(){

            if (li.hasClass('current')) {
              isotope.reset(li, group);
              return true;
            }

            li.siblings().removeClass('current');
            li.addClass('current');

            isotope.currentFilters[group] = li.data('filter');

            websitesIso.isotope({
              filter: isotope.concatValues(isotope.currentFilters)
            });

            body.addClass('filter-active');

            // results

            isotope.result();

          });

        }, 200);

      },

      removeButton: function(){

        $('.show-all .button').remove();

      },

      showAll: function(){

        this.overlay('show');

        getWebsites();
        this.result();

      },

      overlay: function(state){

        if ( 'show' == state ) {

          websitesIso.addClass('loading');

        } else {

          setTimeout(function(){
            websitesIso.removeClass('loading');
          }, 250);

        }

      },

      result: function(search){

        search = (typeof search !== 'undefined') ?  search : '';

        var count, all, text, layout, subject,
          el = $('.results', websites);

        count = websitesIso.data('isotope').filteredItems.length;
        layout = this.currentFilters['layout'];
        subject = this.currentFilters['subject'];
        all = el.data('count');

        isotope.overlay('hide');

        if( ! layout && ! subject && ! search ){

          el.html('<strong>All '+ all + '</strong> pre-built websites');
          return false;
        }

        text  = pluralize(count, 'result') +' for: ';

        if( layout ){
          text += '<span class="filter" data-filter="'+ layout +'">'+ dictionary[layout] +'</span>';
        }

        if( layout && subject ){
          text += ' and '
        }

        if( subject ){
          text += '<span class="filter" data-filter="'+ subject +'">'+ dictionary[subject] +'</span>';
        }

        if( search ){
          text += '<span class="filter key">'+ search +'</span>';
        }

        el.html(text);

      },

      unclick: function(el){

        var filter = el.data('filter');

        if( filter ){
          $('.filters li[data-filter="'+ filter +'"] a').click();
        } else {
          $('.search-wrapper .close').click();
        }


      },

      clear: function() {

        isotope.currentFilters = [];
        $('.filters li').removeClass('current');
        body.removeClass('filter-active');

      }

    };

    /**
     * Lazy load images
     */

    var lazyLoad = function() {

      var observer = lozad('.lozad, img[data-src]');
      observer.observe();

    };

    /**
     *
     */

    var pluralize = function(count, noun){

      if( 1 !== count ){
        noun = noun + 's';
      }

      return count + ' ' + noun;

    }

    /**
     * Video
     */

    var magicVideo = function(){

      var controller = new ScrollMagic.Controller();

      var Scene = new ScrollMagic.Scene({
        triggerElement: "#player-main",
        duration: '160%',
        triggerHook: 0

      }).setPin("#player-main-inner").addTo(controller);

      var Scene3 = new ScrollMagic.Scene({
        triggerElement: "#player-main",
        duration: '69%',
        triggerHook: 0

      });

      Scene3.on("end", function () {
        $("#desc-1").toggleClass("show");
        $(".player-counter-number.two").toggleClass("active");
        $("#desc-2").toggleClass("show");
      }).addTo(controller);

      var Scene4 = new ScrollMagic.Scene({
        triggerElement: "#player-main",
        duration: '140%',
        triggerHook: 0
      });

      Scene4.on("end", function () {
        $("#desc-2").toggleClass("show");
        $("#desc-3").toggleClass("show");
        $(".player-counter-number.three").toggleClass("active");
        $("#replay").toggleClass("showme");
      }).addTo(controller);

      var video = document.getElementById('video');
      var scrollpos = 0;
      var lastpos = void 0;

      var Scene2 = new ScrollMagic.Scene({
        triggerElement: "#player-main",
        duration: '150%',
        triggerHook: 0
      });
      var startScrollAnimation = function startScrollAnimation() {
        Scene2.addTo(controller)
        // .addIndicators()
        .on("progress", function (e) {
          scrollpos = e.progress;
        });

        setInterval(function () {
          if (lastpos === scrollpos) return;
          requestAnimationFrame(function () {

            video.currentTime = video.duration * scrollpos;
            video.pause();
            lastpos = scrollpos;

            var dur = video.currentTime * 100 / video.duration;
            $(".duration").css("width", dur + "%");
          });
        }, 40);
      };

      var preloadVideo = function preloadVideo(v, callback) {
        var ready = function ready() {
          v.removeEventListener('canplaythrough', ready);

          video.pause();
          var i = setInterval(function () {
            if (v.readyState > 3) {
              clearInterval(i);
              video.currentTime = 0;
              callback();
            }
          }, 50);
        };
        v.addEventListener('canplaythrough', ready, false);
        // v.play();
      };

      preloadVideo(video, startScrollAnimation);

    };

    /**
     * Get all pre-built websites
     */

    var getWebsites = function() {

      if ( getWebsitesOnce ) {
        return true;
      }

      getWebsitesOnce = true;

      var data = {
        action: 'get'
      };

      $.ajax({

        type: 'post',
        // dataType: 'json',
        data: data

      }).done(function(response) {

        if (response) {

          websitesIso.append(response).isotope('reloadItems').isotope({
            sortBy: 'original-order'
          });

          websitesIso.on('arrangeComplete', function() {
            lazyLoad();
            isotope.removeButton();
            getWebsitesDone.resolve();
          });

        } else {

          console.log('Error: Could not get all pre-built websites.');

        }

      });

    };

    /**
     * Sticky filters
     */

    var stickyFilters = function() {

      sidebar = $('#websites .filters').stickySidebar({
        topSpacing: 90
      });

    };

    /**
     * Author read more
     */

    var readmore = function(el){

      el.hide(100);
      el.closest('.quote').find('.hidden').addClass('visible');

      recalculate();

    }

    /* Testimonials */

    var testimonials = function() {


      $('.testimonials .slider').each(function() {

        var slider = $(this);

        slider.slick({
          arrows: false,
          autoplay: true,
          autoplaySpeed: 5000,
          dots: true
        });

      });


    };

    /**
     * Recalculate everything
     */

    var recalculate = function() {

      $(window).trigger('resize');

      onePage.setPositions();
      sidebar.stickySidebar('updateSticky');

    };

    /**
     * Bind
     */

    var bind = function() {

      // click

      $('.filters').on('click', 'a', function(e) {
        e.preventDefault();
        isotope.filter($(this));
      });

      $('.results').on('click', '.filter', function(e) {
        e.preventDefault();
        isotope.unclick($(this));
      });

      menu.on('click', '.menu-toggle', function(e) {
        e.preventDefault();
        mobile.toggleMenu();
      });

      menu.on('click', '.submenu-open', function(e) {
        mobile.submenuOpen($(this));
        return false;
      });

      menu.on('click', '.scroll', function(e) {
        e.preventDefault();
        onePage.click($(this));
      });

      header.on('click', '.submenu-close', function(e) {
        mobile.submenuClose();
      });

      header.on('click', '.search-toggle', function(e) {
        e.preventDefault();
        mobile.searchToggle();
      });

      header.on('click', '.filters-toggle', function(e) {
        e.preventDefault();
        mobile.filtersToggle();
      });

      body.on('click', '.scroll', function(e) {
        e.preventDefault();
        onePage.scrollTo($(this));
      });

      $('.show-all').on('click', '.button', function(e) {
        e.preventDefault();
        isotope.showAll();
      });

      $('.scroll-top').on('click', function(e) {
        e.preventDefault();
        onePage.scrollTop();
      });

      $('.readmore').on('click', function(e) {
        e.preventDefault();
        readmore($(this));
      });

      $('.search-wrapper').on('click', '.close', function() {

        if (body.hasClass('search-active')) {
          searchForm.search('');
        }

        header.removeClass('search-open');

      });

      // keyup

      search.on('keyup', function() {
        searchForm.searchTimer($(this));
      });

      // window.load

      $(window).load(function() {

        stickyFilters();
        testimonials();

        isotope.init();

        magicVideo();

      });

      // window.scroll

      $(window).scroll(function() {

        sticky.scroll();
        onePage.scrollActive();

      });

      // window resize

      $(window).on('debouncedresize', function() {

        mobile.set();
        sticky.set();

      });

    };

    /**
     * Constructor
     */

    var construct = function() {

      lazyLoad();
      onePage.setPositions();

      bind();

    };

    /**
     * Return
     */

    return {
      construct: construct
    };

  })(jQuery);

  /**
   * $(document).ready
   * Specify a function to execute when the DOM is fully loaded.
   */

  $(function() {
    Splash.construct();
  });

})(jQuery);

/**
 * debouncedresize: special jQuery event that happens once after a window resize
 * https://github.com/louisremi/jquery-smartresize
 * Licensed under the MIT license.
 */

!function(e){var n,t,i=e.event;n=i.special.debouncedresize={setup:function(){e(this).on("resize",n.handler)},teardown:function(){e(this).off("resize",n.handler)},handler:function(e,o){var r=this,s=arguments,d=function(){e.type="debouncedresize",i.dispatch.apply(r,s)};t&&clearTimeout(t),o?d():t=setTimeout(d,n.threshold)},threshold:150}}(jQuery);

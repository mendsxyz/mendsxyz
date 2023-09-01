const app = {
  
  navigation(){
    
    const nav = {
      
      toggler: document.querySelector(".navmenu-toggler"),
      
      menu: document.querySelector(".navmenu"),
      
      routelinks: Array.from(document.querySelectorAll(".routelink")),
      
      routes: Array.from(document.querySelectorAll(".route")),
      
      in_page_routelinks_bar: Array.from(document.querySelectorAll(".in-page-routelinks--bar")),
      
      in_page_routelinks: Array.from(document.querySelectorAll(".in-page-routelink")),
      
      OPEN_AND_CLOSE_NAVMENU(){
        
        nav.toggler.addEventListener("click", () => {
          
          console.log("navmenu toggler clicked!")
          
          if(nav.menu.classList.contains("navmenu-hidden")){
            
            nav.menu.classList.remove("navmenu-hidden")
            
            nav.toggler.innerHTML = `<span class="fas fa-times"></span>`
            
          } else {
            
            nav.menu.classList.add("navmenu-hidden")
            
            nav.toggler.innerHTML = `<span class="fas fa-bars"></span>`
            
          }
          
        })
        
      },
      
      CLOSE_NAVMENU(){
        
        if(nav.menu.classList.contains("navmenu-hidden")){
            
          nav.menu.classList.remove("navmenu-hidden")
          
          nav.toggler.innerHTML = `<span class="fas fa-times"></span>`
            
        } else {
            
          nav.menu.classList.add("navmenu-hidden")
          
          nav.toggler.innerHTML = `<span class="fas fa-bars"></span>`
            
        }
        
        /*
        const largerScreens = window.matchMedia("(min-height:560px)")
        
        function checkScreenSize(e){
          
          if(e.matches){
            
            nav.in_page_routelinks.forEach(bar => {
              bar.classList.add("scroll-end--slideup-bar")
            }
            
          } else {
              
              nav.in_page_routelinks[index].classList.remove("scroll-end--slideup-bar")
              
           }
            
          }
        
        largerScreens.addListener(checkScreenSize)
        
        checkScreenSize(largerScreens) 
        */
      },
      
      ROUTELINK_ACTIVE_STATE_AND_ROUTE_SWITCH(){
        
        nav.routelinks.forEach((routelink, index) => {
          
          routelink.addEventListener("click", () => {
            
            nav.routelinks.forEach(navlink => {
              
              navlink.classList.remove("routelink--active")
              
            })
            
            nav.routes.forEach(route => {
              
              route.classList.remove("route-in-view")
              
              route.classList.add("route-out-view")
              
            })
            
            nav.routes[index].classList.remove("route-out-view")
            
            nav.routes[index].classList.add("route-in-view")
            
            nav.routelinks[index].classList.add("routelink--active")
            
            nav.CLOSE_NAVMENU()
            
          })
          
        })
        
      },
      
      IN_PAGE_NAVIGATION(){
        
        nav.in_page_routelinks.forEach((navbtn, index) => {
          
          navbtn.addEventListener("click", () => {
            
            console.log("in page routelink clicked!")
            
            nav.routelinks.forEach(navlink => {
            
              navlink.classList.remove("routelink--active")
            
            })
            
            nav.routes.forEach(route => {
              
              route.classList.remove("route-in-view")
              
              route.classList.add("route-out-view")
              
            })
            
            if(navbtn.classList.contains("route-to-skills")){
            
              nav.routes[0].classList.remove("route-in-view")
            
              nav.routes[0].classList.add("route-out-view")
              
              nav.routes[1].classList.remove("route-out-view")
            
              nav.routes[1].classList.add("route-in-view")
            
              nav.routelinks[1].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
              //nav.SLIDEUP_IN_PAGE_ROUTELINKS_BAR_ON_SCROLL_END()
            
            } else if(navbtn.classList.contains("route-to-experience")){
              
              nav.routes[1].classList.remove("route-in-view")
            
              nav.routes[1].classList.add("route-out-view")
              
              nav.routes[2].classList.remove("route-out-view")
            
              nav.routes[2].classList.add("route-in-view")
            
              nav.routelinks[2].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
            } else if(navbtn.classList.contains("route-to-projects")){
              
              nav.routes[2].classList.remove("route-in-view")
              
              nav.routes[2].classList.add("route-out-view")
              
              nav.routes[3].classList.remove("route-out-view")
              
              nav.routes[3].classList.add("route-in-view")
              
              nav.routelinks[3].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
            } else if(navbtn.classList.contains("route-to-contact")){
              
              nav.routes[3].classList.remove("route-in-view")
              
              nav.routes[3].classList.add("route-out-view")
              
              nav.routes[4].classList.remove("route-out-view")
              
              nav.routes[4].classList.add("route-in-view")
              
              nav.routelinks[4].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
            } else if(navbtn.classList.contains("route-to-support")){
              
              nav.routes[4].classList.remove("route-in-view")
              
              nav.routes[4].classList.add("route-out-view")
              
              nav.routes[5].classList.remove("route-out-view")
              
              nav.routes[5].classList.add("route-in-view")
              
              nav.routelinks[5].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
            } else{
              
              nav.routes[0].classList.remove("route-out-view")
              
              nav.routes[0].classList.add("route-in-view")
              
              nav.routelinks[0].classList.add("routelink--active")
              
              window.scrollTo(0,0)
              
            }
            
          })
          
        })
        
      },
      
      SLIDEUP_IN_PAGE_ROUTELINKS_BAR_ON_SCROLL_END(){
        
        let screenHeight = window.innerHeight;
        
        if(screenHeight <= 560){
          
          //alert("less than 560")

          //window.removeEventListener("load", showRoutelinksBarAlt);
        
          window.addEventListener('scroll', scrollFunction() {
            
            let scrollPosition = window.scrollY;
            
            //let documentHeight = document.documentElement.scrollHeight;
            
            //let windowHeight = window.innerHeight;
            
            if(scrollPosition >= 30){
              
              nav.in_page_routelinks_bar.forEach(bar => {
                
                bar.classList.add("scroll-end--slideup-bar")
                
              })
              
            } else {
            
              nav.in_page_routelinks_bar.forEach(bar => {
              
                bar.classList.remove("scroll-end--slideup-bar")
              
              })
            
            }
          
            //prevScrollPosition = scrollPosition;
          
          });
          
        } else {
          
          //alert("longer than 560")
          
          //window.removeEventListener("scroll",  scrollFunction);

          window.addEventListener('load', showRoutelinksBarAlt(){
            
            nav.in_page_routelinks_bar.forEach(bar => {
            
              bar.classList.add("scroll-end--slideup-bar")
            
            })

          })
          
        }
        
      }
      
    }
    
      nav.OPEN_AND_CLOSE_NAVMENU()
    
      nav.ROUTELINK_ACTIVE_STATE_AND_ROUTE_SWITCH()
    
      nav.IN_PAGE_NAVIGATION()

      //nav.SHOW_IN_PAGE_ROUTELINKS_BAR_ON_LONGER_MOBILE_SCREENS()
    
      nav.SLIDEUP_IN_PAGE_ROUTELINKS_BAR_ON_SCROLL_END()
    
  },
  
  homeRoute(){
    
    const tab = {
      
      selectors: Array.from(document.querySelectorAll(".tab-select")),
      
      unit: Array.from(document.querySelectorAll(".tab-unit")),
      
      SWITCH_TAB(){
        
        tab.selectors.forEach((selector, index) => {
          
          selector.addEventListener("click", () => {
            
            tab.selectors.forEach(button => {
              
              button.classList.remove("tab-unit-selector-button--active")
              
            })
            
            tab.unit.forEach(unit => {
              
              unit.classList.remove("tab-selected")
              
              unit.classList.add("tab-idle")
              
            })
            
            tab.unit[index].classList.remove("tab-idle")
            
            tab.unit[index].classList.add("tab-selected")
            
            tab.selectors[index].classList.add("tab-unit-selector-button--active")
            
          })
          
        })
        
      }
      
    }
    
    tab.SWITCH_TAB()
    
  },
  
  contactRoute(){
    
    const contact = {
      
      form: document.getElementById("contactForm"),

      clientMessageInit: document.getElementById("clientMessageInit"),
      
      submitWrapper: document.getElementById("inputSubmitWrapper"),
      
      submit: document.getElementById("inputSubmit"),
      
      SUCCESS_AND_ERROR_CHECK_ON_MESSAGE_SENDING(){
        
        contact.form.addEventListener("submit", function(e) {
          
          e.preventDefault()

          contact.clientMessageInit.value = document.getElementById("clientMessageBox").innerText
          
          contact.submit.value = ""
          
          contact.submitWrapper.insertAdjacentHTML("afterbegin", `<div class="form-submit--loading-circle"></div>`)
          
          let loadingCircle = contact.submitWrapper.querySelector(".form-submit--loading-circle")
          
          setTimeout(function(){
            
            contact.submit.value = "Sent successfully!"
            
            loadingCircle.remove()
            
          }, 3000)
          
          setTimeout(function(){
            
            contact.form.submit();
            
          }, 4000)
          
        })
        
      }
      
    }
    
    contact.SUCCESS_AND_ERROR_CHECK_ON_MESSAGE_SENDING()
    
  },
  
  supportRoute(){
    
    const paymentForm = document.getElementById("paymentForm");
    
    paymentForm.addEventListener("submit", payWithPaystack, false);
    
    function payWithPaystack(e) {
      
      e.preventDefault();
      
      let handler = PaystackPop.setup({
        key: "pk_test_7dc6cadcadd8b914d88437978c4a56878b05a956", // Replace with your public key
        email: document.getElementById("userEmail").value,
        amount: document.getElementById("fixedAmount").value * 100,
        currency: document.getElementById("currencyOptions").value,
        ref: "txID" + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        
        // label: "Optional string that replaces customer email"
        onClose: function(){
          alert("Window closed.");
        },
        
        callback: function(response){
          let message = "Payment complete! Reference: " + response.reference;
          alert(message);
        }
        
      });
      
      handler.openIframe();
      
    }
    
  },
  
  otherRoute(){
    
  },
  
  setAppRoute(){
    
    app.navigation()
    
    app.homeRoute()
    
    app.contactRoute()
    
    app.supportRoute()
    
    app.otherRoute()
    
  }
  
}

app.setAppRoute();
                

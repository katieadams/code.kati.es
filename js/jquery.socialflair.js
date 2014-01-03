/*!
 * jQuery socialFlair - Stackoverflow like User Flairs to showcase your
 * Social Profiles
 * ---------------------------------------------------------------------
 *
 * This is a simple jQuery plugin which lets you embed social flairs
 * into your personal website or blog.
 *
 * Licensed under Mozilla Public License
 *
 * @version        1.0.0
 * @since          2012.05.01
 * @author         Amit Gharat a.k.a. codef0rmer
 * @blog           http://goo.gl/frl5a
 * @twitter        twitter.com/codef0rmer
 *
 * Usage:
 * ---------------------------------------------------------------------
 * Twitter Flair:
 *    $(ele).socialFlair('twitter', 'twitterUsername', {});
 *
 * Github Flair:
 *    $(ele).socialFlair('github', 'githubUsername', {});
 *
 * Facebook Flair:
 *    Create an App and get the details here: https://developers.facebook.com/apps
 *    $(ele).socialFlair('facebook', 'facebookUsername', {clientId : clientId, clientSecret : clientSecrete});
 *
 */
(function($) {
  $.fn.extend({
    socialFlair : function(service, handler, options) {
      var defaults = {

      };
      options = $.extend({}, defaults, options);

      return this.each(function() {
        var $ele = $(this),
            followers = 0,
            following = 0,
            access_token = null,
            public_repos = 0;

        // Twitter API
        if (service === 'twitter' && handler !== undefined) {

    
          
          $.getJSON("http://twitcher.steer.me/user/"+handler+"?key=4m66z2xq", function (data) {

  
                  $('#twitterFlair').html(
                  "<a class='sfLink' href='http://twitter.com/" + handler +"'><div class='sfTable sfTwitter'><div class='sfRow'>" +
                  " <div class='sfCell1'>" +
                  "  <img class='sfProfilePic' src='https://2.gravatar.com/avatar/ec61787ef10c288400864e72e92a5f80?d=https%3A%2F%2Fidenticons.github.com%2F112334f0a7540d6bd500deae0ff3af83.png&r=x&s=202' width='48px' height='48px' />" +
                  " </div>"+
                  " <div class='sfCell2'>" +
                  "  <div class='sfHandle'>" + truncateName(handler) + "</div>" +
                  "  <div class='sfFans'>"+
                  " <span class='followers' alt='Followers' title='Followers'>Followers: " + data.followers_count + "</span>" +
                  "  </div>" +
                  "</div>" +
                  "</div></div>​</a>"
                );
 
});


          

  

        } else if (service === 'github' && handler !== undefined) {
          // Github API
          $.ajax({
            url : 'https://api.github.com/users/' + handler,
            method : 'get',
            dataType : 'jsonp',
            success : function (data) {
              followers = data.data.followers;
              public_repos = data.data.public_repos;
              $ele.html(
                "<a class='sfLink' href='" + data.data.html_url +"'><div class='sfTable sfGithub'><div class='sfRow'>" +
                " <div class='sfCell1'>" +
                "  <img class='sfProfilePic' src='https://2.gravatar.com/avatar/ec61787ef10c288400864e72e92a5f80?d=https%3A%2F%2Fidenticons.github.com%2F112334f0a7540d6bd500deae0ff3af83.png&r=x&s=202' width='48px' height='48px' />" +
                " </div>" +
                " <div class='sfCell2'>" +
                "  <div class='sfHandle'>" + truncateName(data.data.name || data.data.login) + "</div>" +
                "  <div class='sfFans'>" +
                "   <span class='public_repos' alt='Public Repositories' title='Public Repositories'>" + public_repos + "</span>" +
                "   <span class='followers' alt='Followers' title='Followers'>" + followers + "</span>" +
                 ( data.data.hireable === true ? "<span class='hireable'>Hire Me!</span>" : '' ) +
                "  </div>" +
                "</div>" +
                "</div></div>​</a>"
              );
            }
          });
        }
        
         
      });
    }
  });
})(jQuery);

function truncateName(handler) {
  return ( handler.length > 28 ? handler.substring(0, 28) + '...' : handler );
}

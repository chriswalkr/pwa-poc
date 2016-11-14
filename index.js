
  var Installer = function(root) {

    var install = function(e) {
      e.preventDefault();
      window.install.prompt()
        .then(function(outcome) {
            console.log('DONE');
        })
        .catch(function(installError) {
            alert('failed');
        });
    };

    var init = function() {
      window.install.canPrompt();
    };

    root.addEventListener('click', install.bind(this));
    root.addEventListener('touchend', install.bind(this));

    init();
  };

  window.addEventListener('load', function() {
      var installEl = document.getElementById('installer');
      var installer = new Installer(installEl);
  });
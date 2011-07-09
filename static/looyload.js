
  var activeColor = "#fff";
  var disabledColor = "#999";
  var defaultValue = "ใส่ url ...";
  
  function loadBox() {
    var box = document.getElementById("url_entry");
    if (box.value != defaultValue) {
      box.style.color = activeColor;
    }
  }
  
  function focusBox() {
    var box = document.getElementById("url_entry");
    if (box.value == defaultValue) {
      box.value = "";
      box.style.color = activeColor;
    }
  }
  
  function blurBox() {
    var box = document.getElementById("url_entry");
    if (box.value == "") {
      box.style.color = disabledColor;
      box.value = defaultValue;
    }
  }

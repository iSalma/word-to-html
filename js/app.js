//js
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "ارسال";
  } else {
    document.getElementById("nextBtn").innerHTML = "التالي";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
//   if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
  }

/************
 * TABLE
 * ****************************** */
function add() {
    var num = document.getElementById("t1").rows.length;
    console.log(num);
    var x = document.createElement("tr");

    var a = document.createElement("td");
    var anode = document.createTextNode(num+'.');
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);
  
    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);

    a = document.createElement("td");
    anode = document.createElement("input");
    b = document.createAttribute("type");
    b.value = "text";
    anode.setAttributeNode(b);
    a.appendChild(anode);
    x.appendChild(a);
    
    a = document.createElement("td");
    anode = document.createElement('input');
    anode.setAttribute('type','button');
    anode.setAttribute('value','Delete Row');
  anode.setAttribute('onclick','deleteRow(this)');
    a.appendChild(anode);
    x.appendChild(a);
    document.getElementById("t1").appendChild(x);
}

function deleteRow(e,v) {
  var tr = e.parentElement.parentElement;
  var tbl = e.parentElement.parentElement.parentElement;
  tbl.removeChild(tr);
}
/************
 * END TABLE
 * ****************************** */
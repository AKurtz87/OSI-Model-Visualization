function toggleLayerDetails(event) {
  var layer = event.currentTarget;
  var protocols = layer.querySelector(".protocols");
  var table = layer.querySelector("table");

  // Toggle visibility
  protocols.style.display =
    protocols.style.display === "none" ? "block" : "none";
  table.style.display = table.style.display === "none" ? "table" : "none";
}

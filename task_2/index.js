const params = new URLSearchParams(window.location.search);

params.forEach(function (value, key) {
  if (key === "size") {
    const input = document.querySelector('input[name=size][value="" + value + ""]');
    if (input) input.checked = true;
  }

  if (key === "color") {
    const input = document.querySelector('input[name=color][value="" + value + ""]');
    if (input) input.checked = true;
  }

  if (key === "manufacturer") {
    const option = document.querySelector('select[name=manufacturer] option[value="" + value + ""]');
    if (option) option.selected = true;
  }

  if (key === "sale") {
    const input = document.querySelector('input[name=sale]');
    if (input) input.checked = true;  
  }
});

function onFilterChange() {
  const params = [];

  document.querySelectorAll("input[name=size]").forEach(function (input) {
    if (input.checked) params.push(["size", input.value]);
  });

  document.querySelectorAll("input[name=color]").forEach(function (input) {
    if (input.checked) params.push(["color", input.value]);
  });

  document.querySelectorAll("select[name=manufacturer] option").forEach(function (option) {
    if (option.selected) params.push(["manufacturer", option.value]);
  });
  
  console.log(new URLSearchParams(params).toString());
}

document.querySelectorAll("input[name=size]").forEach(function (input) {
  input.addEventListener("change", onFilterChange);
});

document.querySelectorAll("input[name=color]").forEach(function (input) {
  input.addEventListener("change", onFilterChange);
});

document.querySelector("select[name=manufacturer]")
  .addEventListener("change", onFilterChange);
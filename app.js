"use strict";

const app = () => {
  const form = document.getElementById("form");
  const inputRange = document.getElementById("pageviews");
  const inputToggle = document.getElementById("toggle__input");
  const pageViewsText = document.querySelector(".form__pageviews__number");
  const priceText = document.querySelector(".price__text--big");

  // DATA
  const DATA = [
    {
      pageViews: "10k",
      monthlyCost: 8,
      backgroundPercentage: 0,
    },
    {
      pageViews: "50k",
      monthlyCost: 12,
      backgroundPercentage: 25,
    },
    {
      pageViews: "100k",
      monthlyCost: 16,
      backgroundPercentage: 50,
    },
    {
      pageViews: "500k",
      monthlyCost: 24,
      backgroundPercentage: 75,
    },
    {
      pageViews: "1M",
      monthlyCost: 36,
      backgroundPercentage: 100,
    },
  ];

  const getData = () => {
    const value = inputRange.value;
    const index = value - 1;
    return DATA[index];
  };

  const updatePageViewsText = () => {
    const { pageViews } = getData();
    pageViewsText.textContent = `${pageViews} PAGEVIEWS`;
  };

  const isYearlyChecked = () => inputToggle.checked;

  const updatePriceText = (yearlyActive, monthlyCost) => {
    const price = yearlyActive ? monthlyCost - monthlyCost * 0.25 : monthlyCost;
    priceText.textContent = `$${price.toFixed(2)}`;
  };

  const updateCostText = () => {
    const { monthlyCost } = getData();
    const yearlyActive = isYearlyChecked();
    updatePriceText(yearlyActive, monthlyCost);
  };

  const updateBGPercentage = () => {
    const { backgroundPercentage } = getData();
    form.style.setProperty("--range-bg", backgroundPercentage);
  };

  const updateUI = () => {
    updatePageViewsText();
    updateCostText();
    updateBGPercentage();
  };

  // Event Listeners
  inputToggle.addEventListener("change", () => {
    updateUI();
  });

  inputRange.addEventListener("input", () => {
    updateUI();
  });
};

app();

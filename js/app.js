const urlInput = document.getElementById('url');
const generateLinksButton = document.querySelector('button[type="submiturl"]');
const linksContainer = document.getElementById('links');
generateLinksButton.addEventListener('click', (event) => {
event.preventDefault();
const url = urlInput.value;
if (!url) return;

  const links = [
	`https://search.google.com/search-console/r/3d-models?resource_id=${url}`,
	`https://search.google.com/search-console/amp?resource_id=${url}`,
	`https://search.google.com/search-console/amp-articles?resource_id=${url}`,
	`https://search.google.com/search-console/r/breadcrumbs?resource_id=${url}`,
	`https://search.google.com/search-console/r/auto-user-review?resource_id=${url}`,
	`https://search.google.com/search-console/r/carousels?resource_id=${url}`,
	`https://search.google.com/search-console/r/courses?resource_id=${url}`,
	`https://search.google.com/search-console/r/critic-reviews?resource_id=${url}`,
	`https://search.google.com/search-console/r/datasets?resource_id=${url}`,
	`https://search.google.com/search-console/r/employer-ratings?resource_id=${url}`,
	`https://search.google.com/search-console/r/estimated-salaries?resource_id=${url}`,
	`https://search.google.com/search-console/r/events?resource_id=${url}`,
	`https://search.google.com/search-console/r/fact-check?resource_id=${url}`,
	`https://search.google.com/search-console/r/faq?resource_id=${url}`,
	`https://search.google.com/search-console/r/financial-wellness?resource_id=${url}`,
	`https://search.google.com/search-console/r/guided-recipes?resource_id=${url}`,
	`https://search.google.com/search-console/r/how-to?resource_id=${url}`,
	`https://search.google.com/search-console/https?resource_id=${url}`,
	`https://search.google.com/search-console/r/image-licenses?resource_id=${url}`,
	`https://search.google.com/search-console/r/job-trainings?resource_id=${url}`,
	`https://search.google.com/search-console/r/jobs?resource_id=${url}`,
	`https://search.google.com/search-console/r/learning-video?resource_id=${url}`,
	`https://search.google.com/search-console/r/lenslets?resource_id=${url}`,
	`https://search.google.com/search-console/r/lists?resource_id=${url}`,
	`https://search.google.com/search-console/r/live-coverage-articles?resource_id=${url}`,
	`https://search.google.com/search-console/r/local-business?resource_id=${url}`,
	`https://search.google.com/search-console/r/logos?resource_id=${url}`,
	`https://search.google.com/search-console/r/math-solvers?resource_id=${url}`,
	`https://search.google.com/search-console/r/medical-conditions?resource_id=${url}`,
	`https://search.google.com/search-console/r/merchant-listings?resource_id=${url}`,
	`https://search.google.com/search-console/r/movies?resource_id=${url}`,
	`https://search.google.com/search-console/r/paywalled-content?resource_id=${url}`,
	`https://search.google.com/search-console/r/person?resource_id=${url}`,
	`https://search.google.com/search-console/r/practice-problems?resource_id=${url}`,
	`https://search.google.com/search-console/r/product?resource_id=${url}`,
	`https://search.google.com/search-console/r/q-and-a?resource_id=${url}`,
	`https://search.google.com/search-console/r/recipes?resource_id=${url}`,
	`https://search.google.com/search-console/r/review-snippet?resource_id=${url}`,
	`https://search.google.com/search-console/r/sitelinks-searchbox?resource_id=${url}`,
	`https://search.google.com/search-console/shopping-tab-listings?resource_id=${url}`,
	`https://search.google.com/search-console/r/software-apps?resource_id=${url}`,
	`https://search.google.com/search-console/r/special-announcements?resource_id=${url}`,
	`https://search.google.com/search-console/r/sports-videos?resource_id=${url}`,
	`https://search.google.com/search-console/r/subscribed-content?resource_id=${url}`,
	`https://search.google.com/search-console/r/unknown-type?resource_id=${url}`,
	`https://search.google.com/search-console/r/videos?resource_id=${url}`
  ];

  linksContainer.innerHTML = '';
  links.forEach((link, index) => {
  const linkElement = document.createElement('a');
  linkElement.href = link;
  linkElement.target = '_blank';
  switch (index) {
// I can't get proper link text handling from code-llama, seems it's still pretty lame. So here's raw URLs.
//    case 0:
  //    linkElement.innerText = 'Products Listings';
    //  break;
    default:
      linkElement.innerText = `${index + 1}: ${link}`;
  }
  linksContainer.appendChild(linkElement);
  linksContainer.appendChild(document.createElement('br'));
  });
});

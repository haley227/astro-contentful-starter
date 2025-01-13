import { ContentfulLivePreview } from '@contentful/live-preview';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

ContentfulLivePreview.init({ locale: 'en-US', enableLiveUpdates: true, debugMode: true });

const updateEntry = (entry, value) => {
  if (typeof value === 'string') {
    entry.textContent = value;
  } else if (typeof value === 'object' && value.hasOwnProperty('json')) {
    entry.innerHTML = documentToHtmlString(value.json);
  } else if (value.url) {
    entry.src = value.url;
  }
}

const callback = (data) => {
  for (const [key, value] of Object.entries(data)) {
    const entry = document.querySelector(`[data-contentful-field-id="${key}"]`);
    if (entry) updateEntry(entry, value);
  }
};

const data = window.contentfulEntry;
ContentfulLivePreview.subscribe({ data, locale: 'en-US', callback });

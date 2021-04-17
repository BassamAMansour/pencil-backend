import {sanitizeUrl} from "@braintree/sanitize-url";
import {unfurl} from "unfurl.js";


function getImage(unfurledLink) {
    const images = unfurledLink?.open_graph?.images || [];

    return images.length ? images[0]?.url : undefined;
}

const renderUnfurledLink = (unfurledLink) => ({
    title: unfurledLink.title,
    favicon: unfurledLink.favicon,
    "large-image": getImage(unfurledLink),
    snippet: unfurledLink.description,
});

export async function getRenderedUnfurledLink(url) {
    let sanitizedUrl = sanitizeUrl(url);

    if (sanitizedUrl.substring(0, 4) !== "http") {
        sanitizedUrl = "https://" + sanitizedUrl;
    }

    const unfurledLink = await unfurl(sanitizedUrl);

    return renderUnfurledLink(unfurledLink);
}

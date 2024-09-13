export default function analytics(data = {}, eventName = "gtm.click") {
    dataLayer.push({
        event: eventName,
        ...data
    })
}
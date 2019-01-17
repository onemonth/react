var ipod = {
  name: 'Apple iPod',
  price: 19900,
  manufacturer: "Apple",
  description: "A8 chip, 8MP iSight camera, 5 stunning colors.",
  inStock: false,
  url: "https://www.apple.com/ipod/"
};

var iphone = {
  name: 'Apple iPhone',
  price: 64900,
  manufacturer: "Apple",
  description: "Explore iPhone, the world's most powerful personal device. Check out iPhone 7, iPhone 7 Plus, and iPhone 6s.",
  inStock: true,
  url: "https://www.apple.com/iphone/"
};

var surface = {
  name: 'Microsoft Surface Book',
  price: 114900,
  manufacturer: "Microsoft",
  description: "Get a high-performance laptop computer with incredible power, a stunning display, a thin profile and true versatility. ",
  inStock: true,
  url: "https://www.microsoft.com/en-us/surface/devices/surface-book/overview"
};

var xbox = {
  name: 'Microsoft XBOX',
  price: 28849,
  manufacturer: "Microsoft",
  description: "Everything you love about Xbox One, now with 4K Blu-ray™, 4K video streaming, and HDR.",
  inStock: true,
  url: "https://www.xbox.com/en-US/xbox-one-s"
};

var echo = {
  name: 'Amazon Echo',
  price: 17999,
  manufacturer: "Amazon",
  description: "Amazon Echo is a hands-free speaker you control with your voice. Echo connects to the Alexa Voice Service to play music, provide information, news, sports and more.",
  inStock: true,
  url: "https://www.amazon.com/Amazon-Echo-Bluetooth-Speaker-with-WiFi-Alexa/dp/B00X4WHP5E"
};

var products = [ipod, iphone, surface, xbox, echo];

module.exports = products;

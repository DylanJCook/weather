import Weather from './index';

describe("weather", () => {
  var w = new Weather();
  it("returns the request string for london", () => {
    expect(w.getRequestString('london')).toBe("https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=46e629b13bd5cebf1ec99f8548201672&q=london");
  });
});

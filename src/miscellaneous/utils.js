export const handleErrResponse = (data) => {
  const res = { err: null, msg: null };
  if (data) {
    res.err = data.status;
    if (res.data && res.data.msg) {
      res.msg = res.data.msg;
    }
  } else {
    res.err = 503;
    res.msg = "Sorry! Issue in Connection.";
  }
};

export const stringToHslColor = (str) => {
  const s = 40,
    l = 55;
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var h = hash % 360;
  return `hsl(${h},${s}%, ${l}%)`;
};

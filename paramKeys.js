function getParamKeys(path) {
  if(/\/:[^\/]+/.test(path)) {
    var placeholder = /\/:[^\/]+/g;
    var params = path.match(placeholder);
    path = new RegExp(`^${path.replace(placeholder, '/([^/]+)')}$`);

    return {
      path: path,
      params: params
    }
  }
}

var userPathParams = getParamKeys("/user/:id");
var userPhotoParams = getParamKeys("/users/:id/photos/:photo-id");

console.log(userPathParams);
console.log(userPhotoParams);

var userActualPath = "/user/1";
console.log(userActualPath.match(userPathParams.path));

var userPhotoActualPath = "/users/23/photos/15";
console.log(userPhotoActualPath.match(userPhotoParams.path));

export function setLoggin(value){
  return {
	type: "SET_LOGGEDIN",
	value: value
  }
};

export function setUser(name){
  return {
	type: "SET_USER",
	value: name
  }
};
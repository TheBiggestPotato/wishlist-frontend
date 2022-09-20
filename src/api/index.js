export const loginUser = async (loginData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(loginData),
  };

  await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/login",
    requestOptions
  )
    .then((response) => response.json())

    .then((data) => {
      if (data) {
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("isLogged", 1);
      } else {
        alert("Invalid email or password!");
      }
    });
};

export const register = async (userData) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  };
  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/register",
    requestOptions
  );

  const data = await response.json();

  console.log(data);

  return data;
};

export const logout = () => {
  sessionStorage.removeItem("token");
  sessionStorage.setItem("isLogged", 0);
};

export const myDetails = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/me",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const editMyDetails = async (token, modifiedData) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(modifiedData),
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/me",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const createList = async (token, listData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(listData),
  };

  await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists",
    requestOptions
  )
    .then((response) => response.json())

    .then((data) => console.log(data));
};

export const getLists = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const createItem = async (token, itemData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(itemData),
  };

  await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items",
    requestOptions
  )
    .then((response) => response.json())

    .then((data) => console.log(data));
};

export const createGroup = async (token, groupData) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(groupData),
  };

  await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups",
    requestOptions
  )
    .then((response) => response.json())

    .then((data) => console.log(data));
};

export const getItems = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const getGroups = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const getListItems = async (token, id) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists",
    requestOptions
  );

  let data = await response.json();

  for (let list of data.wishlists) {
    if (list.id == id) {
      return list.items;
    }
  }
};

export const deleteItem = async (token, id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    `http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/items/${id}`,
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const deleteList = async (token, id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    `http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlists/${id}`,
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const deleteGroup = async (token, id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    `http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${id}`,
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const getUsers = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/users",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const sendInvite = async (token, groupId, id) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(id),
  };

  await fetch(
    `http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/${groupId}/users`,
    requestOptions
  )
    .then((response) => response.json())

    .then((data) => console.log(data));
};

export const getSharedGroups = async (token) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
  };

  let response = await fetch(
    "http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/groups/shared",
    requestOptions
  );

  let data = await response.json();

  return data;
};

export const editList = async (token, modifiedData, id) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(modifiedData),
  };

  let response = await fetch(
    `http://ec2-18-217-234-99.us-east-2.compute.amazonaws.com:8080/v1/wishlist/${id}`,
    requestOptions
  );

  let data = await response.json();

  return data;
};

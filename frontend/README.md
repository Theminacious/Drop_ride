Collecting workspace information

To update the documentation for the 

get-fare

 endpoint and create a complete endpoint documentation for every endpoint, follow these steps:

1. Create a new `API.md` file in the 

Backend

 directory.
2. Add the documentation for the 

get-fare

 endpoint and other endpoints.

Here is the content for the `API.md` file:

```md
# API Documentation

## Authentication

### User Authentication

#### Register User
- **Endpoint**: `/users/register`
- **Method**: `POST`
- **Description**: Register a new user.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    },
    "token": "string"
  }
  ```

#### Login User
- **Endpoint**: `/users/login`
- **Method**: `POST`
- **Description**: Login an existing user.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    },
    "token": "string"
  }
  ```

#### Get User Profile
- **Endpoint**: `/users/profile`
- **Method**: `GET`
- **Description**: Get the profile of the authenticated user.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Logout User
- **Endpoint**: `/users/logout`
- **Method**: `GET`
- **Description**: Logout the authenticated user.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logout successful"
  }
  ```

### Captain Authentication

#### Register Captain
- **Endpoint**: `/captains/register`
- **Method**: `POST`
- **Description**: Register a new captain.
- **Request Body**:
  ```json
  {
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "password": "string",
    "vehicle": {
      "color": "string",
      "plate": "string",
      "capacity": "number",
      "vehicletype": "string"
    }
  }
  ```
- **Response**:
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicletype": "string"
      }
    },
    "token": "string"
  }
  ```

#### Login Captain
- **Endpoint**: `/captains/login`
- **Method**: `POST`
- **Description**: Login an existing captain.
- **Request Body**:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicletype": "string"
      }
    },
    "token": "string"
  }
  ```

#### Get Captain Profile
- **Endpoint**: `/captains/profile`
- **Method**: `GET`
- **Description**: Get the profile of the authenticated captain.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicletype": "string"
      }
    }
  }
  ```

#### Logout Captain
- **Endpoint**: `/captains/logout`
- **Method**: `GET`
- **Description**: Logout the authenticated captain.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "message": "Logout successful"
  }
  ```

## Maps

### Get Coordinates
- **Endpoint**: `/maps/get-coordinates`
- **Method**: `GET`
- **Description**: Get the coordinates of a given address.
- **Query Parameters**:
  ```json
  {
    "address": "string"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "lat": "number",
    "lng": "number"
  }
  ```

### Get Distance and Time
- **Endpoint**: `/maps/get-distance-time`
- **Method**: `GET`
- **Description**: Get the distance and time between two locations.
- **Query Parameters**:
  ```json
  {
    "origin": "string",
    "destination": "string"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "distance": "string",
    "duration": "string"
  }
  ```

### Get Suggestions
- **Endpoint**: `/maps/get-suggestions`
- **Method**: `GET`
- **Description**: Get autocomplete suggestions for a given input.
- **Query Parameters**:
  ```json
  {
    "input": "string"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  [
    {
      "place_id": "string",
      "description": "string"
    }
  ]
  ```

## Rides

### Create Ride
- **Endpoint**: `/rides/create-ride`
- **Method**: `POST`
- **Description**: Create a new ride.
- **Request Body**:
  ```json
  {
    "pickup": "string",
    "destination": "string",
    "vehicleType": "string"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "ride": {
      "_id": "string",
      "user": "string",
      "pickup": "string",
      "destination": "string",
      "vehicleType": "string",
      "fare": "number",
      "status": "string",
      "otp": "string"
    }
  }
  ```

### Get Fare
- **Endpoint**: `/rides/get-fare`
- **Method**: `GET`
- **Description**: Get the fare for a ride between two locations.
- **Query Parameters**:
  ```json
  {
    "pickup": "string",
    "destination": "string"
  }
  ```
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <token>"
  }
  ```
- **Response**:
  ```json
  {
    "fare": "number"
  }
  ```

## Example Usage

### Get Fare Example

#### Request
```sh
curl -X GET "http://localhost:3000/rides/get-fare?pickup=123%20Main%20St&destination=456%20Oak%20St" -H "Authorization: Bearer <token>"
```

#### Response
```json
{
  "fare": 150
}
```
```

This `API.md` file provides a comprehensive documentation for all the endpoints in your backend application. Make sure to update the file as you add or modify endpoints in your application.
This `API.md` file provides a comprehensive documentation for all the endpoints in your backend application. Make sure to update the file as you add or modify endpoints in your application.
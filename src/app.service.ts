import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any[] {
    const userdate = [
      {
        "user_id": "123456789",
        "username": "john_doe",
        "full_name": "John Doe",
        "email": "john.doe@example.com",
        "age": 30,
        "gender": "male",
        "location": {
          "city": "New York",
          "country": "USA"
        },
        "interests": [
          "hiking",
          "reading",
          "cooking"
        ],
        "membership_level": "gold",
        "last_login": "2024-05-14T12:00:00Z"
      },
      {
        "user_id": "987654321",
        "username": "jane_smith",
        "full_name": "Jane Smith",
        "email": "jane.smith@example.com",
        "age": 25,
        "gender": "female",
        "location": {
          "city": "Los Angeles",
          "country": "USA"
        },
        "interests": [
          "traveling",
          "photography",
          "yoga"
        ],
        "membership_level": "silver",
        "last_login": "2024-05-13T15:30:00Z"
      },
      {
        "user_id": "456789123",
        "username": "sam_jackson",
        "full_name": "Sam Jackson",
        "email": "sam.jackson@example.com",
        "age": 35,
        "gender": "male",
        "location": {
          "city": "London",
          "country": "UK"
        },
        "interests": [
          "music",
          "football",
          "coding"
        ],
        "membership_level": "bronze",
        "last_login": "2024-05-14T08:45:00Z"
      }
    ]
    return userdate;
  }
}

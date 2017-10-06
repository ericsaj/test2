import { Availability, Question } from './api-types';

export interface Availability {
    M: number;
    T: number;
    W: number;
    Th: number;
    F: number;
    S: number;
    Su: number;
}

export interface Question {
    text: string;
    answer: string;
}

export interface Application {
    id: number;
    name: string;
    position: string;
    applied: string;
    experience: number;
    availability: Availability;
    questions: Question[];
}

export const fakeApiApplicationData = 
[
    {
      "id":1,
      "name":"John Smith",
      "position":"Server",
      "applied":"03/15/16",
      "experience":2,
      "availability":{
        "M":2,
        "T":2,
        "W":1,
        "Th":2,
        "F":1,
        "S":0,
        "Su":0
      },
      "questions":[
        {
          "text":"Have you ever been convicted of a felony?",
          "answer":"No"
        }
      ]
    },
    {
      "id":2,
      "name":"Jane Smith",
      "position":"Cook",
      "applied":"02/08/16",
      "experience":4,
      "availability":{
        "M":1,
        "T":1,
        "W":1,
        "Th":1,
        "F":0,
        "S":0,
        "Su":0
      },
      "questions":[
        {
          "text":"Have you ever been convicted of a felony?",
          "answer":"Yes"
        }
      ]
    },
    {
      "id":3,
      "name":"David Jessup",
      "position":"Chef",
      "applied":"03/08/16",
      "experience":2,
      "availability":{
        "M":2,
        "T":2,
        "W":2,
        "Th":2,
        "F":2,
        "S":0,
        "Su":0
      },
      "questions":[
        {
          "text":"Are you authorized to work in the United States?",
          "answer":"Yes"
        }
      ]
    },
    {
      "id":4,
      "name":"Clay vanSchalkwijk",
      "position":"Cook",
      "applied":"03/08/16",
      "experience":1,
      "availability":{
        "M":1,
        "T":0,
        "W":1,
        "Th":0,
        "F":1,
        "S":0,
        "Su":0
      },
      "questions":[
        {
          "text":"Are you authorized to work in the United States?",
          "answer":"Yes"
        }
      ]
    }
  ];
  
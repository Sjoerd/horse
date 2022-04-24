| User |
| --- | 
| id | 
| naam | 
| email |
| ubn |

| Horse | 
| --- | 
| id |
| foto |
| geslacht (hengst, merrie, ruin) |
| haarkleur |
| *ras* | 
| geboortedatum |
| paspoortnummer | 
| vader | 
| moeder | 
| chipnummer | 
| fokker | 
| stamboekregister |
| informatie | 
| allergieën |

| Log | 
| --- | 
| id |
| start_date | 
| end_date |
| category | (behandeling, ziekte, dekperiode, overig, ...)
| note | 


| Log_media | 
| --- | 
| log_id | 
| name | 


| Horse_log | 
| --- | 
| horse_id | 
| log_id | 


| User_horses | 
| --- | 
| user_id |
| horse_id | 
| is_owner | 
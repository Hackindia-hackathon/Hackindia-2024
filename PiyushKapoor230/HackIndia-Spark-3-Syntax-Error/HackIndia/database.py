import mysql.connector
from mysql.connector import errorcode
import csv 
print(type)

class databaseManager:
    def __init__(self,inputuserName,inputPassword,inputHostId,inputdatabasename):
        self.userName= inputuserName
        self.databasePassword=inputPassword
        self.databaseHostId=inputHostId
        self.databaseName=inputdatabasename
        self.cnx=None
        self.cursor=None
        self.connectdatabase()    
        
    def connectdatabase(self):
        try:self.cnx=mysql.connector.connect(user=self.userName,password=self.databasePassword,host=self.databaseHostId,database=self.databaseName)
        except mysql.connector.Error as err:
            if err.errno==errorcode.ER_ACCESS_DENIED_ERROR:
                print("something is wrong with your usernname or password")
            elif err.errno==errorcode.ER_BAD_DB_ERROR:
                print("database does not exist")
            else: print(err)
        else:
            self.cursor = self.cnx.cursor()
        
    def dml(self,query):
        
        if self.cnx!=None:
            try:
                self.cursor.execute(query)
                self.cnx.commit()
                return True
            except mysql.connector.Error as err:
                print("error no is ",err.errno,"error message is ",err.msg)
                return False
    
        else:
            print("connection unexpectidly terminated")
            return False

    def dql(self,query):
        dataLine=[]
        if self.cnx!=None:
            try:
                self.cursor.execute(query)
                outputdata=self.cursor.fetchall()
                
                for row in outputdata:        
                        dataLine.append(row)
                            
                             
                
                return dataLine         
            except mysql.connector.Error as err:
                print("error no is ",err.errno,"error message is ",err.msg)
                return False
        else:
            print("connection unexpectidly terminated")
            return False



d1=databaseManager('tanmay','Hello2K23###123','127.0.0.1','movies')

# with open('test.csv', mode ='r') as file:    
#        csvFile = csv.reader(file)
#        z=file.readline()
#        for i in range (10):
#         y=file.readline()
#         sqlline=f"INSERT INTO `movies`.`new_table` ({z})VALUES ({y});"
#         print(sqlline)
#         if d1.dml(sqlline)==True:
#             print("sucess")


    #    print(x)
    #    for line in csvFile:
    #         print(f"INSERT INTO `movies`.`new_table` ({x})VALUES ({line})")
            


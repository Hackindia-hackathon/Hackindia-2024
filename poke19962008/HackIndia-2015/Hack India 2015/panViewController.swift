//
//  panViewController.swift
//  Hack India 2015
//
//  Created by Sayan Das on 19/07/15.
//  Copyright © 2015 Sayan Das. All rights reserved.
//


/*

 test Data = let url = NSURL(string: "http://localhost:8000/cgi-bin/t.py?q=sayan")
*/
import UIKit

class panViewController: UIViewController {
    
    @IBOutlet weak var firstN: UILabel!
    @IBOutlet weak var panID: UITextField!
    @IBOutlet weak var lastN: UILabel!
    
    var haveData = true
    var Data:NSData!
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    @IBAction func check(sender: AnyObject) {
        
        let ID = panID.text
        
        let url = NSURL(string: "http://localhost:8000/cgi-bin/final_pan_api.py?pan="+ID!)
        
        let request = NSMutableURLRequest(URL: url!)
        request.HTTPMethod = "GET"
        
        let session = NSURLSession.sharedSession()
        let task = session.dataTaskWithRequest(request, completionHandler: {(data, response, error) -> Void in
            self.Data = data
            self.haveData = false
        })
        task?.resume()
        
        print("processsing...")
        while(haveData){ }
        
        if(Data != nil){
//            let aData = getJSONdata(Data)
//        
//            print(aData)
//        
//            setLabels()
//            print("procesed..")
            print(Data)
        }else{
            print("Data is nil")
        }
        
    }
    
    func setLabels(){
        
    }
    
    //get JSON data from the /connector.php
    func getJSONdata(data: NSData) -> NSArray {
        
//        let data = NSData(contentsOfURL: phpSQLconnector)
        
        do{
            print(data)
            let JSONdata = try NSJSONSerialization.JSONObjectWithData(data, options: NSJSONReadingOptions())
            print(JSONdata)
            
//            print(JSONdata)
            return JSONdata as! NSArray
        }catch{
            print("error")
            return []
        }
    }
    
    
}

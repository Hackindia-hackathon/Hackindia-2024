//
//  ViewController.swift
//  Hack India 2015
//
//  Created by Sayan Das on 18/07/15.
//  Copyright © 2015 Sayan Das. All rights reserved.
//

import UIKit

class Welcome: UIViewController {

    var btnText = ["Pan ID", "Voter ID", "Adhaar Card", "Driving License"]
    var imgA = ["pan", "vote", "adhaar" ,"drive"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    
    
    @IBAction func verify(sender: AnyObject) {
        
    }

}



//MARK:-  UICIllectionView DATASOURCE extension
extension Welcome: UICollectionViewDataSource, UICollectionViewDelegate, UICollectionViewDelegateFlowLayout{
    
    func numberOfSectionsInCollectionView(collectionView: UICollectionView) -> Int {
        return 1
    }
    
    func collectionView(collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
        return btnText.count
    }
    
    func collectionView(collectionView: UICollectionView, cellForItemAtIndexPath indexPath: NSIndexPath) -> UICollectionViewCell {
        let cell = collectionView.dequeueReusableCellWithReuseIdentifier("cell", forIndexPath: indexPath) as! WelcomeCell
        
        let img = cell.viewWithTag(1) as! UIImageView
        let btn = cell.viewWithTag(2) as! UIButton
//
        img.image = UIImage(named: imgA[indexPath.item])
        img.contentMode = UIViewContentMode.ScaleAspectFill
        
        btn.setTitle(btnText[indexPath.item], forState: UIControlState.Normal)
        
        return cell
    }
    
}


//
//  WelcomeCell.swift
//  Hack India 2015
//
//  Created by Sayan Das on 19/07/15.
//  Copyright © 2015 Sayan Das. All rights reserved.
//

import UIKit

class WelcomeCell: UICollectionViewCell {
    override func layoutSubviews() {
        super.layoutSubviews()
        self.layer.cornerRadius = 10.0
        self.clipsToBounds = true
    }
}

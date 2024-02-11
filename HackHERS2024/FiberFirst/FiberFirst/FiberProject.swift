//
//  FiberProject.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import Foundation
import SwiftUI
import CoreLocation

struct FiberProject: Hashable, Codable, Identifiable {
    var id: Int
    var name: String
    var patternLink: String
    var description: String
    var isCrochet: Bool
    var timerInSeconds: Int
    var numRows: Int
    var numStitches: Int
    var isFavorite: Bool
}

//
//  FiberFirstApp.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import SwiftUI

@main
struct FiberFirstApp: App {
    @State private var objectData = ObjectData()

    var body: some Scene {
        WindowGroup {
            ContentView()
                .environment(objectData)
        }
    }
}

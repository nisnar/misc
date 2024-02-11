//
//  ContentView.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        FiberProjectList()
    }
}

#Preview {
    ContentView()
        .environment(ObjectData())
}

//
//  FiberProjectRow.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import SwiftUI

struct FiberProjectRow: View {
    var fiberProject: FiberProject
    var body: some View {
        HStack {
            if (fiberProject.isCrochet) {
                Image("crochetIcon")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50, height: 50)
            } else {
                Image("knitIcon")
                    .resizable()
                    .scaledToFill()
                    .frame(width: 50, height: 50)
            }
            Text(fiberProject.name)
            Spacer()
            if fiberProject.isFavorite {
                Image(systemName: "heart.fill")
                    .foregroundStyle(.grassy)
            }
        }
        .padding()
    }
}

#Preview() {
    let fiberProjects = ObjectData().fiberProjects
    return Group {
        FiberProjectRow(fiberProject: fiberProjects[0])
        FiberProjectRow(fiberProject: fiberProjects[1])
        FiberProjectRow(fiberProject: fiberProjects[2])
    }
}

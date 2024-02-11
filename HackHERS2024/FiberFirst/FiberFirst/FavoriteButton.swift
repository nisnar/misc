//
//  FavoriteButton.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/11/24.
//

import SwiftUI

struct FavoriteButton: View {
    @Binding var isSet: Bool
    var body: some View {
        Button {
            isSet.toggle()
        } label: {
            Label("Toggle Favorite", systemImage: isSet ? "heart.fill" : "heart")
                .labelStyle(.iconOnly)
                .foregroundStyle(isSet ? .grassy : .gray)
        }
    }
}

#Preview {
    FavoriteButton(isSet: .constant(true))
}

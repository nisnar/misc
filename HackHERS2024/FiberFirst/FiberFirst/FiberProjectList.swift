//
//  FiberProjectList.swift
//  FiberFirst
//
//  Created by Nishka Narang on 2/10/24.
//

import SwiftUI

struct FiberProjectList: View {
    @Environment(ObjectData.self) var objectData
    @State private var showFavoritesOnly = false
    
    var filteredFiberProjects: [FiberProject] {
        objectData.fiberProjects.filter { fiberProject in
            (!showFavoritesOnly || fiberProject.isFavorite)
        }
    }
    
    init() {
        UINavigationBar.appearance().largeTitleTextAttributes = [
            .foregroundColor:(UIColor.mauve)
        ]
    }
    
    var body: some View {
        ZStack {
            Image("background")
                .resizable()
                .scaledToFill()
                .ignoresSafeArea()
            VStack{
                HStack {
                    Image("logo")
                        .resizable()
                        .scaledToFill()
                        .frame(width: 100, height: 50)
                    Spacer()
                }.padding()
                NavigationSplitView {
                    ZStack {
                        //background color potential
                        List {
                            Toggle(isOn: $showFavoritesOnly){
                                Text("Favorites Only")
                            }
                            ForEach(filteredFiberProjects) { fiberProject in
                                NavigationLink {
                                    FiberProjectDetail(fiberProject: fiberProject)
                                } label: {
                                    FiberProjectRow(fiberProject: fiberProject)
                                }
                                .listRowBackground(Color.white)
                            }
                        }
                    }
                    Button (action: {}){
                        Image(systemName: "square.and.pencil")
                            .resizable()
                            .scaledToFit()
                            .frame(width: 50, height: 30)
                        Text("Add a new project")
                    }
                    .animation(.default, value: filteredFiberProjects)
                    .navigationTitle("projects")
                    .foregroundColor(Color.mauve)
                } detail: {
                    Text("Select a project")
                }
            }
        }
    }}

#Preview {
    FiberProjectList()
        .environment(ObjectData())
}

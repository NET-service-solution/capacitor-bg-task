import Foundation

@objc public class CapacitorBgTasks: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

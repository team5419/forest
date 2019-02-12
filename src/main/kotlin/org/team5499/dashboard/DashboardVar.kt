package org.team5499.dashboard

import kotlin.reflect.KProperty
import kotlin.reflect.KClass
import kotlin.reflect.full.memberProperties
import kotlin.reflect.KVisibility
import kotlin.reflect.KMutableProperty

class DashboardVar<T>(var initValue: T) {

    companion object {
        @SuppressWarnings("EmptyCatchBlock", "TooGenericExceptionCaught")
        fun initClassProps(clazz: KClass<*>) {
            clazz.memberProperties.forEach({
                if (it.visibility == KVisibility.PUBLIC && it is KMutableProperty<*>) {
                    try {
                        it.getter.call(clazz.objectInstance)
                    } catch (e: Exception) {
                    }
                }
            })
            clazz.nestedClasses.forEach({
                initClassProps(it)
            })
        }
    }

    var isInit = false

    operator fun getValue(thisRef: Any?, property: KProperty<*>): T {
        if (!isInit) {
            Dashboard.setVariable(property.name, initValue as Any)
            isInit = true
            return initValue
        }
        return Dashboard.getVariable(property.name)
    }

    operator fun setValue(thisRef: Any?, property: KProperty<*>, value: T) {
        isInit = true
        Dashboard.setVariable(property.name, value as Any)
    }
}
